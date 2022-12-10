import math, { getSum } from "./lib.mjs";

//    최신 문법의 기준 ES6(2015년 기준)

/* 
    1. var 문제점
        1) 중복선언이 가능함. → 의도하지 않았음에도 값이 변경될 수 있어서 예상치 못한 오류가 발생할 수 있음
        2) 변수 호이스팅이 발생함. → 변수 선언 이전에 참조가 된다. 변수 초기화시  undefined가 할당된다.
        3) 블록 레벨 스코프(유효 범위)를 지원하지 않는다.
 */

console.log(num); // 호이스팅 발생
var num = 10;
console.log(num);
var num = 30;
console.log(num);

function sum(a) {
  var num = 0;
  num = num + a;
  return num;
}

console.log(sum(10));
console.log(num);

if (true) {
  var num = 100;
  var num02 = 200; //블록 레벨 스코프를 지원하지 않기 때문에 전역 변수 num02가 생성됨
  console.log(num);
}

console.log(num, num02);

if (true) {
  // console.log(num03); 선언 이전에 참조 불가능 → 엄밀히 말하면 호이스팅 자체는 일어남. → TDZ 문제 (Temporary Dead Zone)

  let num03 = 10;
  // let num03 = 10; 중복 선언 불가능.
}

// console.log(num03); 블록 레벨 스코프를 지원한다. 고로 전역 변수가 생성되지 않았다.

const TAX = 10; //constant(상수)의 줄임말 → 값을 무조건 초기화 해야 함.
// TAX = 100; 상수이기 때문에 재할당 불가
console.log("세율이 " + TAX + "% 입니다.");
// 템플릿 리터럴 : `` (백틱, 그레이브 (1 옆에 있음)를 통해서 문자열 안에 표현식을 포함 시킬 수 있다. ${표현식}의 형태)
console.log(`세율이 ${TAX / 2 + 3}%입니다.`); //가독성이 좋음

/* 
    화살표 함수 (Arrow Function)
        1) 표현이 간결하기 때문에 주로 콜백함수로 전달할 때 사용함
        2) 코드블록을 생략하면 return을 생략할 수 있다. (한 줄로 표현 가능해야 함.)
        2-1) 객체를 리턴할 경우 한 줄로 줄이는데 문제가 생김. 객체도 {}를 사용하기 때문에 () 안에 사용해야 객체로 인식함.
        3) this 바인딩이 되지 않음

*/
let divide = (a, b) => {
  return a / b;
};

/* let getObj = (name, age) =>{
        name,
        age,
    
}; */

//이렇게 표현
let getObj = (name, age) => ({
  name,
  age,
});

let user = {
  name: "seok",
  age: 30,
  hello: () => {
    //화살표 함수를 사용하면 this가 바인딩이 되지 않는다.
    // console.log(this.name, this.age); mjs로 변경하면서 유효범위가 바뀜.
  },
};

user.hello();

console.log(`10 / 2 : ${divide(10, 2)}`);

setTimeout(() => {
  console.log("2초 경과");
}, 2000);

let divide2 = (a, b) => a / b;

console.log(`2) 10 / 2 : ${divide2(10, 2)}`);

/* 
    비구조화 할당
        - 객체나 배열의 값을 간결하게 할당할 수 있다.
            1) 객체는 변수 선언을 {}안에 해주면 됨 → 객체의 키값과 동일하게 작성해야 함.
            1-1) 아닐 경우 undefined
            2) 배열은 [] 안에 순서대로 변수명을 작성하면 배열에 저장된 인덱스에 따라 값이 할당된다.
                → 객체 비구조할당에 비해 변수명을 자유롭게 지을 수 있다. 키값 또한 알 필요가 없다. 대신 순서는 알아야함!
    
*/

// let name = user.name;
// let age = user.age;

let { name: userName, age, height } = user;
console.log(userName, age, height);

let arr = ["seok", 30, "apple", function () {}];
let [name02, age02, fruit, func] = arr;
console.log(name02, func);

/* 
    펼침 연산자(스프레드)
        1) 배열이나 객체의 값들을 나열하는 효과가 있음 → 기존값을 복사하고 새로운 값을 추가 및 변경하는데 유용
        2) 복사할 경우 참조값 복사가 값 자체를 복사하기 때문에 불변성을 지킬 수 있다.
            → 객체가 중첩되는 경우 중첩된 객체는 참조 복사가 일어난다.


*/

let copy = user; //참조복사(주소만 복사해옴)
let copy02 = { ...user, done: true, name: "hwangbo" };

let copyArr = [1, ...arr, false]; //[ 1, 'seok', 30, 'apple', [Function (anonymous)], false ]
copy.age = 31; // 객체는 참조값을 복사해옴
console.log(user, copy02, user === copy02);

let numArr = [1, 2, 10, 5, 7];
let max = Math.max(...numArr);
console.log("max : ", max);
console.log(...numArr);

console.log(copyArr);
// console.log(PI, getSum(2,3));

console.log(math.PI);
