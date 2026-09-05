const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const baseUrls = [
  'https://mixdesign.dev/themeforest/rayo/',
  'https://mixdesign.club/themeforest/rayo/'
];

function downloadUrlToFile(url, destPath) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).href;
        }
        return downloadUrlToFile(redirectUrl, destPath).then(resolve);
      }

      if (res.statusCode === 200) {
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const stats = fs.statSync(destPath);
          if (stats.size > 0) {
            resolve({ success: true, size: stats.size });
          } else {
            resolve({ success: false, reason: 'zero bytes' });
          }
        });
        fileStream.on('error', (err) => {
          resolve({ success: false, reason: err.message });
        });
      } else {
        resolve({ success: false, statusCode: res.statusCode });
      }
    });

    req.on('error', (err) => {
      resolve({ success: false, reason: err.message });
    });
    req.setTimeout(15000, () => {
      req.destroy();
      resolve({ success: false, reason: 'timeout' });
    });
  });
}

async function downloadAsset(relPath) {
  const normalizedRel = relPath.replace(/^[/\\]+/, '').split('\\').join('/');
  const targetPath = path.join(__dirname, 'public', normalizedRel);

  
  if (fs.existsSync(targetPath)) {
    const stats = fs.statSync(targetPath);
    if (stats.size > 0) {
      return { skipped: true, size: stats.size };
    }
  }

  for (const base of baseUrls) {
    const fullUrl = new URL(normalizedRel, base).href;
    const result = await downloadUrlToFile(fullUrl, targetPath);
    if (result.success) {
      console.log(`[SUCCESS] ${normalizedRel} (${result.size} bytes) from ${base}`);
      return result;
    }
  }

  console.warn(`[FAILED] Could not download ${normalizedRel}`);
  return { success: false };
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

async function main() {
  console.log('Scanning for 0-byte or referenced files...');
  const publicDir = path.join(__dirname, 'public');
  const allPublicFiles = getAllFiles(publicDir);

  const targets = [];
  for (const file of allPublicFiles) {
    const stat = fs.statSync(file);
    if (stat.size === 0) {
      const rel = path.relative(publicDir, file);
      targets.push(rel);
    }
  }

  console.log(`Found ${targets.length} 0-byte files to download.`);

  
  const concurrency = 6;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < targets.length; i += concurrency) {
    const chunk = targets.slice(i, i + concurrency);
    const results = await Promise.all(chunk.map((rel) => downloadAsset(rel)));
    for (const r of results) {
      if (r.success) successCount++;
      else if (!r.skipped) failCount++;
    }
    console.log(`Progress: ${Math.min(i + concurrency, targets.length)} / ${targets.length}`);
  }

  console.log(`Download finished! Success: ${successCount}, Failed: ${failCount}`);
}

main().catch(console.error);
