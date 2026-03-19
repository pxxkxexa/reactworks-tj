// myAbs.js 모듈
// 절대값 계산 함수 정의
const times3 = (x) => x * 3;

const myAbs = (x) => {
    if(x < 0)
        return -x;
    else
        return x;
}

// 하나만 내보낼때는 'default' 추가 아닐경우엔 빼
// export default myAbs;
export {times3, myAbs}; // 함수가 여러개인 경우