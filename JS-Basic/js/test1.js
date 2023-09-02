import getType from './getType'

console.log(typeof "Hello World!");   // 문자
console.log(typeof 123);              // 숫자
console.log(typeof true);             // 불리언(Boolean)
console.log(typeof undefined);        // 의도하지 않은 빈값 (undefined)
console.log(typeof null);             // 의도해서 비워놓은 빈값  (Object)
console.log(typeof {});               // 의도해서 비워놓은 빈값  (Object)
console.log(typeof []);               // 의도해서 비워놓은 빈값  (Object)