const http = require('http');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const port = Number(process.argv[2] || 8000);
const host = '127.0.0.1';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.mp4': 'video/mp4'
};

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);
  let file = path.join(root, decodeURIComponent(url.pathname));
  if (url.pathname.endsWith('/')) file = path.join(file, 'index.html');

  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(file).toLowerCase();
    const headers = {
      'Content-Type': types[ext] || 'application/octet-stream'
    };
    if (ext === '.mp4') {
      headers['Content-Disposition'] = `attachment; filename="${path.basename(file)}"`;
    }
    res.writeHead(200, headers);
    res.end(data);
  });
}).listen(port, host, () => {
  console.log(`RM survey server running at http://${host}:${port}/index.html?lang=ko&fast=1`);
});
