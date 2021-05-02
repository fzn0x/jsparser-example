// Generic Tokenizer Spec

const Specs = [
  // skip whitespace
  [/^\s+/, null],
  // skip single line comments
  [/^\/\/.*/, null],
  // skip multi line comments
  [/^\/\*[\s\S]*?\*\//, null],

  // number
  [/^\d+/, "NUMBER"],

  // string
  [/^"[^"]*"/, "STRING"],
  [/^'[^']*'/, "STRING"],
];

class Tokenizer {
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  getNextToken() {
    if (!this.hasMoreTokens()) {
      return null;
    }

    //Numbers : \d+
    const string = this._string.slice(this._cursor);

    //Building a RegExp Machine
    for (const [regexp, tokenType] of Specs) {
      const tokenValue = this._match(regexp, string);

      if (tokenValue == null) {
        continue;
      }

      if (tokenType == null) {
        return this.getNextToken();
      }

      return {
        type: tokenType,
        value: tokenValue,
      };
    }

    throw new SyntaxError(`Unexpected token: ${string[0]}`);
  }

  _match(regexp, string) {
    const matched = regexp.exec(string);
    if (matched == null) {
      return null;
    }
    this._cursor += matched[0].length;
    return matched[0];
  }
}

module.exports = { Tokenizer };
