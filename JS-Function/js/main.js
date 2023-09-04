// ************  함수 복습
function sum(x, y){
  // console.log(x + y);
  // if(x<2){
  //   return
  // }
  // console.log(arguments);  <= 많이 사용되지는 않음
  // console.log(arguments[0] + arguments[1]);

  return x + y;               // return 이 실행되고 나면 함수가 종료됨!
}

// sum(1, 3);

// 변수의 결과가 반복적이지 않을 경우는 -> 사용되는 곳에서 함수를 바로 호출해서 사용
// console.log(sum(1, 3));
// console.log(sum(4, 12));
// console.log(sum(1, 3) + sum(4, 12));

// 변수의 결과가 반복적일 경우는 -> 변수에 담아서 사용
const a = sum(3, 3);
const b = sum(4, 12);

console.log(a);
console.log(b);
console.log(a + b);


// ************  화살표 함수
// () => {}   vs   function = () {}
const double = function(x){
  return x * 2;
}
console.log('double : ', double(7));

// const doubleArrow2 = (x) => x * 2;
const doubleArrow1 = x => x * 2;
console.log('doubleArrow2 : ', double(7));

// {} 사용시 return으로 반환
const doubleArrow2 = (x) => {
  return x * 2;
}
console.log('doubleArrow1 : ', double(7));


// 객체 데이터의 경우 : 같은 중괄호 '{}'를 사용하므로, 축양형 사용시 중괄호가 겹치기 때문에 소괄호 '()'로 한번 더 감싸주면 됩니다!
const doubleArrow3 = x => ({
  age: 30
});



// ************ 즉시 실행함수
// IIFE - Immediately Invoked Function Expression

const num = 7;
function dobule(){
  console.log(num * 2);
}
dobule();

// 즉시 실행함수
// 첫번째 방법
(function dobule(){
  console.log(num * 2);
})();

// 두번째 방법 - 더 권장하는 방식
(function dobule(){
  console.log(num * 2);
}());



// ************ 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// 함수표현식이라면 함수가 만들어지기 전 실행구문은 실행이 안됨
const num1 = 2;
// double1();      //   <= Error!

// 함수 표현식
const double1 = function(){
  return num1 * 2;
}

// 함수가 만들어진 후 실행구문이라 실행이 됨
console.log(double1());


// 함수 선언식이라면 함수가 만들어지기 전 실행구문이라도 실행이 됨  <= 호이스팅이 발생되서 일어난 현상
const num2 = 2;
console.log(double2());    // Success!

// 함수 선언식
function double2(){
  return num2 * 2;
}

// 호이스팅은 함수선언문과 함수표현식에서 서로 다르게 동작하기 때문에 주의해야 합니다!



// ************ 타이머 함수
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// setTimeout(함수, 시간)     :  일정 시간 후 함수 실행
// setInterval(함수, 시간)    :  일정 시간 간격마다 함수 실행
// clearTimeout()   :  설정된 setTimeout 함수를 종료
// clearInterval()  :  설정된 setInterval 함수를 종료


// setTimeout(함수, 시간) 
// const Timer = setTimeout(() => {
//   console.log('Hello!!');
// }, 3000);    // 1s <= 1000ms

// setInterval(함수, 시간) 
// const Timer = setInterval(() => {
//   console.log('Hello!!');
// }, 3000);    // 1s <= 1000ms

// clearTimeout(Timer)
const h1El = document.querySelector('h1');

h1El.addEventListener('click', () => { 
  clearTimeout(Timer);
});



// ************  콜백(Callback)
// 함수의 인수로 사용되는 함수

function timeout(cb){
  setTimeout(() => {
    console.log("Hi!");
    cb();       // 콜백함수는 실행위치를 보장하는 용도로 자주 활용됩니다!
  }, 3000);
}

// timeout();
// console.log('Done!');

timeout(() => { 
  console.log('Done!');
});



