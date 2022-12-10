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

/* 
  Promise : 앞이 대문자면 십중팔구 생성자 함수
    - Promise는 비동기 처리를 도와주는 객체. → 서버에서 데이터를 받아올 때.
    - Promise 생성자의 인자로 함수를 전달한다. → 그 함수에 2개의 함수가 전달됨.
      → resolve : 성공했을 때 실행할 함수. resolve 값을 Promise.prototype.then()의 콜백함수의 첫번째 인자로 전달된다.
      → reject : 실패했을 때 실행할 함수. reject 값을 에러 메세지로 전달한다. → Promise.prototype.catch(콜백함수)의 콜백함수의 첫번째 인자로 에러가 전달된다.
*/

let num04 = 5;
let promise = new Promise(function (resolve, reject) {
  if (num04 < 10) {
    reject("숫자가 10보다 작습니다.");
  }
  resolve(num04);
});

promise
  .then(function (res) {
  console.log(res);
}).catch(function(err){
  console.log(err);
});


function getData(str){
  return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve(str);

      }, 2000);
      
  })
};

function getId(id){
  return new Promise(function(resolve, result) {
    setTimeout(() => {
      resolve(id);
    }, 2000);
    
  })
}

getData("자바스크립트")
  .then(function(){
    return getId(1);
  })
  .then(function (res){
    console.log(res);
  })
  .catch((err) =>{
    console.log(err);
  });

  /* 
    async/await
      -함수 키워드 앞에 async를 붙인다.
      -await을 앞에 붙이면 resolve 될 때까지 다음 코드를 실행하지 않는다.
      → 비동기 코드를 동기처럼 순서를 제어하기 쉽다.
      - try/catch 문을 통해 에러를 처리할 수 있다.
      - promise.all 등을 통해서 병렬적으로 처리할 수도 있다.
      - async 함수는 return 값을 resolve하는 Promise를 반환한다.
  */

  async function fetchData() {
    try{
      // let data = await getData("JS"); 
      // let id = await getId(101);
      let result = await Promise.all([getData("JS"), getId(101)]);
      console.log(result);
    } catch(err){
      console.log(err);
    }

    return 1;
  }

console.log(fetchData());

// 삼항 연산자 : 조건식 ? 참일 경우 : 거짓일 경우
let result02 = num04 < 10 ? "10보다 작음" : "10보다 크거나 같음";
console.log(result02);

// 단축 평가

// &&(and) : 앞의 값이 truthy한 값이라면 뒤의 값이 평가되고, 앞의 값이 falsy라면 앞의 값로 평가된다.
let color = num04 < 10 && "red";
console.log("color : ", color);

// ||(or) : and와 반대
let str = "sddsaasdd" || "안녕하세요";
console.log("str");

// ??(nullish) : ?? 앞의 값이 null이나 undefined이면 ?? 뒤의 값을 할당하고 그 외의 값이면 앞의 값으로 평가된다.
// → 값을 참조해서 있으면 그 값을 사용하고 없으면 대신 할 값을 작성하면 된다.
let value = user.height ?? "할당 안됨";
console.log(value);

//옵셔널 체이닝 : 참조한 객체의 값이 null이거나 undefined인 경우 뒤의 프로퍼티를 평가하지 않는다.
console.log(undefined?.age);
console.log(user.age?.height?.str)

//배열 고차 함수
let userList = [
  {id : 1, name: "seok", age: 30},
  {id : 2, name: "seok", age: 32},
  {id : 3, name: "minsu", age:43},
  {id : 4, name: "minseok", age: 29},
];

// Array.prototype.forEach() : 배열을 순회하며 각 값을 인자로 함수를 반복 실행한다.
userList.forEach((user)=>{
  console.log(user.name);
});

// Array.prototype.filter() : 배열을 순회하며 각 값을 조건식에 따라 해당하는 요소만 배열로 모아서 반환한다. (필터링)
// → 콜백함수의 return 값이 true인 요소만 모아서 반환. 원본 배열을 변경시키지 않음.
let filterArr = userList.filter((user)=>{
  return user.age >= 30;
 
});
console.log(filterArr);
//짝수번째 요소만 모으기
/* let filterArr02 = userList.filter((user)=>{
  return user.id % 2 == 0;
})
console.log(filterArr02) */
let filterArr02 = userList.filter((_, idx)=>{
  return (idx+1) % 2 === 0;
})
console.log(filterArr02)
//좀 더 간결
let filterArr03 = userList.filter((_, idx)=> (idx +1)%2 ===0);
console.log(filterArr03);

//Array.prototype.map() : 배열을 순회하며 각 요소에 변형을 줄 때 사용.
// → 매 반복마다의 return 새로운 배열로 모아서 반환한다. 기존 배열 변경 x.
let mapArr = userList.map(user => {
  return user.age;
});

console.log(mapArr);

// age 30 이상인 user의 name 프로퍼티만 배열로 모아서 반환하기
/*
아래는 실패함(ㅠㅠ) 
let nameArr = userList.map(user =>{
  if(user.age > 29){
    return user.name;
  }
});
console.log(nameArr);
 */


let nameArr = userList.filter(user => user.age >= 30).map(user => user.name);
let count = userList.filter((user)=> user.age >= 30).length;
console.log(nameArr, count);

// Array.prototype.reduce() : 배열을 순회하며 누산(누적 연산)을 할 때 사용
// → 콜백함수의 첫번째 인자로 누적되고 있는 값, 두번째 인자로는 순회중인 요소의 값이 전달.
let ageArr = userList.map(user => user.age);
let totalAge = ageArr.reduce((acc, curr) => acc + curr, 100);
console.log(totalAge);

//find는 1개만 반환하고 filter는 배열로 반환함

//rest 문법 : 매개 변수에 ...을 붙이면 전달된 인자가 몇 개이던 배열로 모아준다.
// → 무조건 매개 변수의 마지막에 사용해야 함.
function getTotal(v, d, f, ...numList){ //순서를 주의해야 함.
  // arguments 얘는 유사 배열
  return numList.reduce((acc, curr) => acc+curr); 
}

console.log(getTotal(1,2,3,4,5))