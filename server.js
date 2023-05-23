const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 1008;
// const hostname = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  } else {
    return res.end("<h1>404, Page not found</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
