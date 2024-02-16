// cluster primary

import cluster from "cluster";
import hhttp from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.info(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  console.info(`worker ${process.pid} started`);
  const server = hhttp.createServer((request, response) => {
    response.write(`Hello from worker ${process.pid}`);
    response.end();
    response.exit();
  });
  server.listen(3000);
}
