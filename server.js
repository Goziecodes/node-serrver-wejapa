const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  // GET endpoint
  if (reqUrl.pathname == "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("content-Type", "Application/json");
    res.end(JSON.stringify("Hello World, Welcome to Wejapa Internships"));
  } else if (reqUrl.pathname == "/" && req.method === "POST") {
    const name = "chigozie Ezechukwu";
    res.statusCode = 200;
    res.setHeader("content-Type", "Application/json");
    res.end(JSON.stringify(`Hello ${name}, Welcome to Wejapa Internships`));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
