import redlinePromises from "readline";
import process from "process";

const rl = redlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  console.info(`Hello ${name}`);
  rl.close();
});
