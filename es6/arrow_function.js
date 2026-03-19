// 함수 선언 - 변하지 않는 값은 const
const add = (x, y) => {
    return x + y;
}

// 실행문이 한 줄이면 {}(블럭), return 생략 가능
const square = (x) => x * x;

// 실행문이 한 줄이면 {}(블럭) 생략 가능
const message = () => console.log("가나다라마바사");

// 호출
console.log(add(4,5));
console.log(square(10))
message();

