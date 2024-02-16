import util from "util";

// name string
const firstName = "Muhammad";
const lastName = "Ilham";

console.info(firstName);
console.info(lastName);

console.info(util.format("Hello %s", firstName));
console.info(util.format("%s %s", firstName, lastName));

// name object

const person = {
  firstName: "Muhammad",
  lastName: "Ilham",
};

console.info(person);
console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
