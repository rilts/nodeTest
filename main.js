import getType from './getType'

//console.log("hello world");
//console.log(_.camelCase('hello world'));

console.log(getType(123));
console.log(getType(false));
console.log(getType(undefined));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));