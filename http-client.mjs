import https from "https";

const endpoint = "https://eomnz0y64qsn0dt.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.on("data", (data) => {
      console.info(`Receive data ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Muhammad",
  lastName: "Ilham",
});

request.write(body);
request.end();
