const Egg = require('./lib/egg');
// 初始化应用
const app = new Egg({
  baseDir: __dirname,
  type: 'application',
});

// Egg 最底层继承了 Koa，本身可以直接启动 HTTP 服务
const server = require('http').createServer(app.callback());
server.once('error', err => {
  console.log('[app_worker] server got error: %s, code: %s', err.message, err.code);
  process.exit(1);
});
server.listen(3000, () => {
  console.log('server started at localhost:3000');
});

