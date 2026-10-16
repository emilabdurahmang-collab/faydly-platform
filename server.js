const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'index.html'));
http.createServer((req,res)=>{
  if(req.url==='/'||req.url==='/index.html'){
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(html);
  }else if(req.url==='/health'){
    res.writeHead(200,{'Content-Type':'text/plain'});res.end('ok');
  }else{res.writeHead(404);res.end('Not found');}
}).listen(process.env.PORT||3000,'0.0.0.0');
