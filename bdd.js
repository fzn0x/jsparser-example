const { Parser } = require("./Parser");
const parser = new Parser();

let program = parser.parse(`31`);

console.log(JSON.stringify(program, 0, 2));
