const http = require('http');
const port = 3999;
const hostname = '127.0.0.1';

const html = `
<!doctype html>
<html lang="zh_cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>nodejs 静态页面测试</title>
  <style>
    body {
      text-align: center;
      background: #373737;
    }

    .title {
      width: 100%;
      text-align: center;
      font-size: 2rem;
      color: #efdf38;
    }

    .msg {
      text-align: center;
      font-size: 1rem;
      color: #31f6f1;
    }

  </style>
</head>
<body>
<h1 class="title">这是一个测试的网页</h1>
<p class="msg">这是一个用 nodejs 起的静态页面</p>
<p class="msg">让我们来玩 nodejs 吧</p>
<p class="msg">这是一次修改</p>
<p class="msg">这是第二次修改</p>
<p class="msg">这是第三次修改</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(html);
});

server.listen(port, () => {
  console.log(`打开浏览器，输入\n http://${hostname}:${port}`);
});
