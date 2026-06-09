// server_test.js
// Sets env, starts a local server that mounts our serverless handlers, then calls /api/auth register
(async ()=>{
  process.env.DATABASE_URL = 'postgresql://neondb_owner:npg_eEBwIs1KZHP5@ep-raspy-block-acl34sx3-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';
  process.env.JWT_SECRET = 'Berger9431';

  const http = require('http');
  const auth = require('./api/auth');
  const { execute } = require('./api/db');

  const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/api/auth')) return auth(req,res);
    if(req.url.startsWith('/api/progress')) return require('./api/progress')(req,res);
    res.statusCode=404;res.end('not found');
  });

  server.listen(3001, async ()=>{
    console.log('server listening on 3001');
    try{
      // register a test user
      const body = JSON.stringify({mode:'register',username:'testauto',password:'testpass',name:'Auto Test'});
      const r = await fetch('http://localhost:3001/api/auth',{method:'POST',headers:{'Content-Type':'application/json'},body});
      const data = await r.text();
      console.log('register response status',r.status,'body',data);

      // check DB for the user
      const rows = await execute('SELECT username,name FROM users WHERE username=$1',['testauto']);
      console.log('db rows for testauto:',rows.rowCount,rows.rows);
    }catch(err){
      console.error('error during test:',err);
    }finally{
      server.close();
      process.exit(0);
    }
  });
})();
