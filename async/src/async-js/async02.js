
//비동기처리
function displayA(){
    console.log('A');
}

// 함수의 인자로 함수가 매개가 될때 해당 함수를 콜백함수 라고 함
function displayB(callBack){
    setTimeout(() => {
        console.log('B'); 
        callBack();
    }, 2000)
}

function displayC(){
    console.log('C');
}

displayA();
displayB(displayC);