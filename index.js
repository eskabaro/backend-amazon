const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*"); // * разрешает доступ со всех источников, можно указать конкретный источник
   res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS" // Разрешенные HTTP-методы
   );
   res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization" // Разрешенные заголовки
   );
   next();
});

server.listen(port, () => {
   console.log(`JSON Server is running on port ${port}`);
});