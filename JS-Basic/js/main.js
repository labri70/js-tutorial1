/* *****************************************************************
  Data Type  : 
  자바스크립트 자료형을 검사하기 위한 방법은 아래와 같습니다.

  1) typeof()
  2) Object.prototype.toString.call()
 ***************************************************************** */


/* typeof(): 피연산자의 데이터 타입을 문자열로 반환합니다.
  - typeof() 경우, 원시타입을 제외한 객체의 경우(function, array 등), 모두 object를 반환하여 정확히 구분하는데 문제가 있습니다.
*/  
console.log(typeof "Hello World!");   // 문자
console.log(typeof 123);              // 숫자
console.log(typeof true);             // 불리언(Boolean)
console.log(typeof undefined);        // 의도하지 않은 빈값 (undefined)
console.log(typeof null);             // 의도해서 비워놓은 빈값  (Object)
console.log(typeof {});               // 의도해서 비워놓은 빈값  (Object)
console.log(typeof []);               // 의도해서 비워놓은 빈값  (Object)


/* 타입 구분 함수 만들기 :
  The toString() 은 문자열을 반환하는 object의 대표적인 방법이다.
  모든 객체에는 객체가 텍스트 값으로 표시되거나 객체가 문자열이 예상되는 방식으로 참조 될 때 자동으로 호출되는 toString() 메서드가 있습니다.
  즉, Object.prototype.toString 메서드는 좀 더 명확하게 객체의 문자열을 반환하며, call 메서드를 이용하면 값의 타입을 알 수 있습니다.
*/
function getType(data){
  // return Object.prototype.toString.call(data);

  // 리턴 결과값인 [object 문자열...] 에서 [] 글자 자르기 
  // string.substring(start, stop);   <= 8(시작에서 8번째 문자), -1(끝에서 첫번째)
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(getType(123));     // [object Number]
console.log(getType(true));    // Boolean
