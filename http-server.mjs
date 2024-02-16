import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.method);
  console.info(request.url);

  if (request.method === "post") {
    request.addListener("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(data);
      response.end();
    });
  } else {
    if (request.url === "/") {
      response.write("Hello Http Server");
    } else if (request.url === "/users") {
      response.write("Muhammad Ilham");
    } else {
      response.statusCode = 404;
      response.write("Not Found");
    }
  }
});

server.listen(3000, "localhost", () => {
  console.info("server listening");
});
