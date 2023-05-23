const http = require("http");
const fs = require("fs");

const PORT = 108;
const hostname = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  } else {
    return res.end("<h1>404, Page not found</h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`server started on http://${hostname}:${PORT}`);
});
