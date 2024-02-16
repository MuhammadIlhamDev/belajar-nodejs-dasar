const buffer = Buffer.from("Hello NodeJs", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("SGVsbG8gTm9kZUpz", "base64");
console.info(bufferBase64.toString("utf-8"));

