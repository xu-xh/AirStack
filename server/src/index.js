const { CloudBaseRunServer } = require("./server");
const routes = require("./routes");

// 创建云托管 Server 实例
const server = new CloudBaseRunServer();

// 注册接口路由
// 这里全用的是post请求，在setRoute方法中已经写死了
for (const route of routes) {
  server.setRoute(route.path, route.handler);
}

// 监听端口
server.listen(7345);
