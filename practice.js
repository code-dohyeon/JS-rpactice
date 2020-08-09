let number1 = Number(prompt("number1"));
let number2 = Number(prompt("number2"));



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

let number3 = Number(prompt("number3 (if, else if, else 선택예제)"));
let answer = 0;


if (number3 == 1) {
    console.log("정말 종료하시겠습니까?");
    console.log("1. 확인  2.취소");
    answer = Number(prompt("answer"));

    if (answer === 1) {
        console.log("종료되었습니다.\n=======================================");
    } else if (answer == 2) {
        console.log("취소되었습니다.\n=======================================");
    } else {
        console.log("입력이 잘못되었습니다.\n=======================================");
    }
} else {
    console.log("입력이 잘못되었습니다.\n=======================================");
}


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

if (answer == 1) {
    number4 += Number(number4);
    console.log(number4 + "을(를) 문자열로 바꾸었습니다.\n=======================================");
} else if(number4 == 2) {
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

let Max_people = Number(prompt("최대 가입 수 (let상황)"));
console.log("최대 가입 수: " + Max_people + "\n=======================================");

const name = prompt("내 이름 (const상황)");
console.log("내 이름: " + name + "\n=======================================");