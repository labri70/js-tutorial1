const man = {
  firstName : 'Gil Dong',
  lastName : 'Hong',
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`     // <= ${} 문자 보간법
  }
}

// console.log(man);
console.log(man.getFullName());


const amy = {
  firstName : 'Amy',
  lastName : 'Clarke',
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`     
  }
}

console.log(amy.getFullName());


const neo = {
  firstName : 'Neo',
  lastName : 'Smith',
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`    
  }
}

// console.log(neo);
console.log(neo.getFullName());


// 효율성(메모리 관리)을 높이기 위해 클래스 작성

// ------------------------  ES5 프로토타입 문법  ------------------------
// 생성자 함수의 경우 일반함수와 구분을 위해 첫글자를 대문자로 시작하는 파스칼방식의 네이밍을 이용해 선언합니다!
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
  // this.getFullName = function(){
  //   return `${this.firstName} ${this.lastName}`    
  // }
}

// 프로토타입
User.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;   
}

// 인스턴스 : user1, user2, user3
const user1 = new User('Gil Dong', 'Hong');    // <= 생성자 함수() : 객체 데이터를 생성
const user2 = new User('Amy', 'Clarke'); 
const user3 = new User('Neo', 'Smith'); 

console.log(user1);
console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());


// ------------------------  ES6 프로토타입 문법  ------------------------
class Person{
  
  // 이전에서 사용하던 생성자 함수는 클래스 안에 `constructor`라는 이름으로 정의합니다.
  constructor({first, last}){
    this.firstName = first;
    this.lastName = last;
  }
 
  // 객체에서 메소드를 정의할 때 사용하던 문법을 그대로 사용하면, 메소드가 자동으로 `Person.prototype`에 저장됩니다.
  getFullName = function(){
    return `안녕하세요, 제 이름은 ${this.firstName} ${this.lastName} 입니다.`;
  }
  
  // 메서드 축약식
  introduce() {
    return `안녕하세요, 제 이름은 ${this.firstName} ${this.lastName} 입니다.`;
  }
}

const person1 = new Person({first: '길동', last: "홍"});
console.log(person1.getFullName()); 
console.log(person1.introduce()); 


// ------------------------  this 문법  ------------------------
// 일반 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const users1 = {
  name:'John',
  normal: function(){
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
}
users1.normal();
users1.arrow();

const users2 = {
  name: 'Joseph',
  normal: users1.normal,
  arrow: users1.arrow,
}
users2.normal();
users2.arrow();

// 생성자
function User1(name) {
  this.name = name;
}

// 프로토타입
User1.prototype.normal = function(){
  console.log(this.name);
}
User1.prototype.arrow = () => {
  console.log(this.name);
}

// 인스턴스
const person2 = new User1('Ellis');    // <= 생성자 함수() : 객체 데이터를 생성

person2.normal();
person2.arrow();


const timer = {
  name: 'Kai',
  timeout: function (){
    // setTimeout(function(){
    //   console.log(this.name);
    // }, 2000);
    setTimeout(() => {              // 콜백이 선언된 setTimeout 함수 범위안에서 실행
      console.log(this.name);
    }, 2000);
  }
}

timer.timeout();


// ====================================================================================================================================

/* 참조사이트 :
https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-ES6-Class-%EB%AC%B8%EB%B2%95-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC
*/

// 클래스 예시(1)
// class Person {

//   /* constructor 란?
//     constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메서드이다.
//     constructor는 클래스 안에 한 개만 존재할 수 있다. 2개 이상 있을 경우 Syntax Error가 발생하니까 주의 바랍니다.
//   */ 

//   // 이전에서 사용하던 생성자 함수는 클래스 안에 `constructor`라는 이름으로 정의합니다.
//   constructor({name, age}) { //생성자
//     this.name = name;
//     this.age = age;
//   }
//   // 객체에서 메소드를 정의할 때 사용하던 문법을 그대로 사용하면, 메소드가 자동으로 `Person.prototype`에 저장됩니다.
//   introduce() {
//     return `안녕하세요, 제 이름은 ${this.name}입니다.`;
//   }
// }

// const person = new Person({name: '윤아준', age: 19});
// console.log(person.introduce()); // 안녕하세요, 제 이름은 윤아준입니다.

// 클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다.
// constructor 내부에 선언한 클래스 필드는 클래스가 생성할 인스턴스에 바인딩 된다.

// 클래스 필드는 그 인스턴스의 프로퍼티가 되며, 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다. (public)

// 클래스 예시(2)
// class Calculator {
//   add(x, y) {
//     return x + y;
//   }
//   subtract(x, y) {
//     return x - y;
//   }
// }

// let calc = new Calculator();
// calc.add(1,10); // 11


// ====================================================================================================================================

class Vehicle {
  constructor(name, wheel) {
     this.name = name;
     this.wheel = wheel;
  }
}

const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle); 


class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

const myBicycle1 = new Bicycle('삼천리', 2);
const myBicycle2 = new Bicycle('세발자전거', 3);

console.log(myBicycle1); 
console.log(myBicycle2); 

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);      // 기존 상속받은 내용(상속)
    this.license = license;  // 신규 추가된 내용(확장)      <= 필요에 따라 내용을 추가해 나갈 수 있음!
  }
}

const myCar1 = new Car('벤츠', 4, true);
const myCar2 = new Car('포르쉐', 4, false);

console.log(myCar1); 
console.log(myCar2); 
