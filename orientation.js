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

const TAX = 10; //constant(상수)의 줄임말
// TAX = 100; 상수이기 때문에 재할당 불가
