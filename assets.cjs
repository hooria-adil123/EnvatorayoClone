const https = require('https');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const baseUrl = 'https://html.aqlova.com/aleric-demo/aleric/';

function downloadFile(relPath) {
  const fileUrl = urlModule.resolve(baseUrl, relPath);
  const targetPath = path.join('./public', relPath);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  
  return new Promise((resolve) => {
    https.get(fileUrl, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        const stream = fs.createWriteStream(targetPath);
        res.pipe(stream);
        stream.on('finish', () => {
          stream.close();
          console.log('Downloaded:', relPath);
          resolve(true);
        });
      } else {
        console.warn('Failed (' + res.statusCode + '):', relPath);
        resolve(false);
      }
    }).on('error', (e) => {
      console.error('Error downloading ' + relPath + ':', e.message);
      resolve(false);
    });
  });
}

async function main() {
  const html = fs.readFileSync('/tmp/aleric_light.html', 'utf8');
  
  const assetRegex = /(?:src|href|data-background|data-bg)=["'](assets\/[^"']+)["']/g;
  const assets = new Set();
  let m;
  while ((m = assetRegex.exec(html)) !== null) {
    assets.add(m[1].split('?')[0].split('#')[0]);
  }
  
  const styleBgRegex = /url\(['"]?(assets\/[^'")]+)['"]?\)/g;
  while ((m = styleBgRegex.exec(html)) !== null) {
    assets.add(m[1].split('?')[0].split('#')[0]);
  }

  console.log('Found assets in HTML:', assets.size);
  for (const a of assets) {
    await downloadFile(a);
  }
  
  const cssDir = './public/assets/css';
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir);
    for (const cf of cssFiles) {
      if (cf.endsWith('.css')) {
        const cssContent = fs.readFileSync(path.join(cssDir, cf), 'utf8');
        const urlRegex = /url\(['"]?([^)'"]+)['"]?\)/g;
        let um;
        while ((um = urlRegex.exec(cssContent)) !== null) {
          let u = um[1].split('?')[0].split('#')[0];
          if (!u.startsWith('data:') && !u.startsWith('http')) {
            const resolved = path.normalize(path.join('assets/css', u)).split(path.sep).join('/');
            if (!assets.has(resolved)) {
              assets.add(resolved);
              await downloadFile(resolved);
            }
          }
        }
      }
    }
  }
  console.log('All downloads completed!');
}

main();
