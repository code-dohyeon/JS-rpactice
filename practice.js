// 변수 2개 숫자로만 받는 입력
let 더하고뺼숫자 = Number(prompt("number1"));
const 고정숫자 = Number(prompt("number2"));


// 숫자가 1일경우 1 출력 아닐경우 입력이 잘못되었다고 출력
// 숫자를 확인해볼수있는 함수 
if (number1 == 1) {
    console.log("1");
} else {
    console.log("입력이 잘못되었습니다.");
}

number1 += number2;
console.log("number1 += number2: " + number1+ "\n=======================================");

number1 = Number(prompt("빼기 " + number2));

number1 -= number2;
console.log("number1 -= number2: " + number1+ "\n=======================================");

number1 = Number(prompt("곱하기 " + number2));

number1 *= number2;
console.log("number1 *= number2: " + number1 + "\n=======================================");

number1 = Number(prompt("나누기 " + number2));

number1 /= number2;
console.log("number1 /= number2: " + number1+ "\n=======================================");


//===================== if, else if, else 예제===============================

let 종료확인입력 = Number(prompt("number3 (if, else if, else 선택예제)"));
let answer = 0;


if (number3 === 1) {
    console.log("정말 종료하시겠습니까?");
    console.log("1. 확인  2.취소");
    answer = Number(prompt("answer"));

    if (answer === 1) {
        console.log("종료되었습니다.\n=======================================");

    } 
    //answer가 만약에 "2" 또는 true여도 취소동작을 합니다 왜냐하면 ==을 === 대신 썻기때문에
    else if (answer == 2) {
        console.log("취소되었습니다.\n=======================================");
    } else {
        console.log("입력이 잘못되었습니다.\n=======================================");
    }
} else {
    console.log("입력이 잘못되었습니다.\n=======================================");
}

//"false" 를 숫자로 변형을 시도. 
//Number자체에서 넌 안되 NaN
// "0"하고 NaN 비교
// 0 NaN null 같지 않아요?
// NaN null 존재하지 않는ㄴ거 0은 존재는 하는데 비어잇는

let number4 = Number(prompt("number4  select: 0,1 (==, !=예제)"));

//========================  ==, !=  ===============================================

if (number4 != "0") {
    console.log(number4 + "은(는) 0이 아닙니다.\n=======================================");
} else if (number4 == "0") {
    console.log(number4 + "은(는) 0이 맞습니다.\n=======================================");
} else {
    console.log("입력이 잘못되었습니다.\n=======================================");
}

//===========================  ===, !==  =====================================


number4 = (prompt("number4  select: 0,1 (===, !==예제)"));

console.log(number4 + "을(를) 숫자로 바꾸시겠습니까?");
console.log("1. 예  2.아니요");

answer = Number(prompt("answer"));
// 숫자로 바꾸기
// ex number4 = "1250"
if (answer == 1) {
    // number4 = "1250"+ 1250
    number4 += Number(number4);
    console.log(number4 + "을(를) 문자열로 바꾸었습니다.\n=======================================");
} else if(answer == 2) {
    console.log(number4 + "을(를) 문자열로 바꾸지 않았습니다.\n=======================================");
} else {
    console.log("입력이 잘못되었습니다.\n=======================================");
}


if (number4 !== "0") {
    console.log(number4 + "은(는) 문자열 0이 아닙니다.\n=======================================");
} else if (number4 === "0") {
    console.log(number4 + "은(는) 문자열 0이 맞습니다.\n=======================================");
} else {
    console.log("입력이 잘못되었습니다.\n=======================================");
}


//===================== var, let, const 상황=================================

var favorite = prompt("내가 좋아하는것 (var상황)");
console.log("내가 좋아하는것: " + favorite + "\n=======================================");
// 현재 입력

let Max_people = Number(prompt("최대 가입 수 (let상황)"));
console.log("최대 가입 수: " + Max_people + "\n=======================================");
가입자수 
//let은 초기화 let 변수명을 사용하여 다시 사용하는 일을 막을때
// let total_cnt= 0 
// total_cnt = 10
// total_cnt = 0 으로 갑자기 변경하는경우는 예방 불가
// let total_cnt = 0 다시 선언하여(이변수를 써야겠다고 생각해서 선언)하는 경우는 예방 가능

const name = prompt("내 이름 (const상황)");
console.log("내 이름: " + name + "\n=======================================");

// const 프로그램 내에서 프로그램이 돌아갈때 변경되면 안될 값
// ex > 최대가입수를 설정하는 이유 회원관리 또는 서버의 한계
// 서버 최대 인원이 10명인데 회원가입 최대수가 11명으로 변경되었다 