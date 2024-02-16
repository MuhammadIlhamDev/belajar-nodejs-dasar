import timers from "timers/promises";

// const timer = await timers.setTimeout(5000, "\nhello world");
// console.info(new Date(), timer);

for await (const startTime of timers.setInterval(1000)) {
  console.info(`startTime: ${new Date()}`);
}
