const { Parser } = require("./Parser");
const parser = new Parser();

let program = parser.parse(`31`);
// let program = parser.parse(`"String"`);
// let program = parser.parse(`'String'`);

console.log(JSON.stringify(program, 0, 2));
// result : NumericLiteral AST
