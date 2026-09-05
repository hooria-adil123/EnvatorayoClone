const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const baseUrls = [
  'https://mixdesign.dev/themeforest/rayo/',
  'https://mixdesign.club/themeforest/rayo/'
];

function downloadUrlToFile(url, destPath, redirects) {
  redirects = redirects || 0;
  return new Promise((resolve) => {
    if (redirects > 5) return resolve({ success: false, reason: 'too many redirects' });
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = new URL(loc, url).href;
        res.resume();
        downloadUrlToFile(loc, destPath, redirects + 1).then(resolve);
        return;
      }
      if (res.statusCode === 200) {
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        const ws = fs.createWriteStream(destPath);
        res.pipe(ws);
        ws.on('finish', () => {
          ws.close();
          const size = fs.statSync(destPath).size;
          if (size > 0) resolve({ success: true, size: size });
          else resolve({ success: false, reason: 'zero bytes' });
        });
        ws.on('error', (e) => resolve({ success: false, reason: e.message }));
      } else {
        res.resume();
        resolve({ success: false, statusCode: res.statusCode });
      }
    });
    req.on('error', (e) => resolve({ success: false, reason: e.message }));
    req.setTimeout(20000, () => { req.destroy(); resolve({ success: false, reason: 'timeout' }); });
  });
}

async function downloadAsset(relPath) {
  const normalizedRel = relPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const targetPath = path.join(__dirname, 'public', normalizedRel);

  for (const base of baseUrls) {
    const fullUrl = base + normalizedRel;
    const result = await downloadUrlToFile(fullUrl, targetPath);
    if (result.success) {
      console.log('[OK] ' + normalizedRel + ' (' + result.size + 'b)');
      return result;
    }
  }
  console.warn('[FAIL] ' + normalizedRel);
  return { success: false };
}

function getAllFiles(dirPath, arr) {
  arr = arr || [];
  fs.readdirSync(dirPath).forEach(function(f) {
    const full = path.join(dirPath, f);
    if (fs.statSync(full).isDirectory()) getAllFiles(full, arr);
    else arr.push(full);
  });
  return arr;
}

async function main() {
  const publicDir = path.join(__dirname, 'public');
  const allFiles = getAllFiles(publicDir);
  const targets = allFiles.filter(function(f) {
    return fs.statSync(f).size === 0;
  }).map(function(f) {
    return path.relative(publicDir, f);
  });

  console.log('Found ' + targets.length + ' empty files to download.');

  let ok = 0, fail = 0;
  const concurrency = 5;

  for (let i = 0; i < targets.length; i += concurrency) {
    const chunk = targets.slice(i, i + concurrency);
    const results = await Promise.all(chunk.map(downloadAsset));
    results.forEach(function(r) {
      if (r.success) ok++;
      else if (!r.skipped) fail++;
    });
    process.stdout.write('Progress: ' + Math.min(i + concurrency, targets.length) + '/' + targets.length + '\n');
  }

  console.log('\nDone! Downloaded: ' + ok + ', Failed: ' + fail);
}

main().catch(console.error);
