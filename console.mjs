import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("console.log");
const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello NodeJS");
log.error("Ups");

const person = {
  firstName: "Muhammad", 
  lastName: "Ilham",     
};

log.table(person);
