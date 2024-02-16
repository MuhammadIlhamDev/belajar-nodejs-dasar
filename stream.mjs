import fs from "fs";

const writer = fs.createWriteStream("target.log");
debugger;

writer.write("Hello\n");
writer.write("Muhammad\n");
writer.write("Ilham\n");
writer.end();
