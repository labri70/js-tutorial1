import random from './getRandom'

// 조건문 (If statement)
// console.log(random());

const a = random();

// if(a === 0){
//   console.log('a is 0');   // 랜덤값이 0 이 될때만 출력
// }else{
//   console.log('rest...');
// }


if(a === 0){
  console.log('a is 0'); 
}else if(a === 2){
  console.log('a is 2');
}else if(a === 4){
  console.log('a is 4');
}else{
  console.log('rest...');
}


// 조건문 (Switch statement) - 조건의 내용이 명확하게 지정되어 있다면 Switch 문을 사용하면
const b = random();

switch(b){
  case 0: console.log('a is 0'); 
  break;
  case 2: console.log('a is 2'); 
  break;
  case 4: console.log('a is 4'); 
  break;
  default: console.log('rest...');
}





















