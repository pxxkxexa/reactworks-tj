/*
    map(인라인 함수)
    배열 객체를 함수로 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 함수
*/

let arr = [1, 2, 3]

const newArr = arr.map(x => x * 3);
console.log(newArr);

// 배열 객체
const users = [
    {name: 'Nana', age: 25},
    {name: 'Lina', age: 24},
    {name: 'Yena', age: 23}
]

// 이름을 배열에 저장
const names = users.map(user => user.name);
console.log(names);

// 나이를 배열에 저장
const ages = users.map(user => user.age);
console.log(ages);