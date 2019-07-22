class StringBuilder {
  constructor(str) {
    this.value = str;
  }

  get value() {
    return this._value;
  }

  set value(value) {
      return this._value = value;
  }

  append(str) {
    this.value = this.value + str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
      this.value = str + this.value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='