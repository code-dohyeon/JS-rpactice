// ===================================반복문==========================================

// for
// while
// do while

// for each

// for (초기문; 조건문(반복을 빠져나올수 있는); for문이 한번 돌고 실행되야할 실행문) {

// }

// for (let cnt = 0; cnt; cnt++) {
// 	반복시킬 문장	
// }
// 1칸 cnt 라는 변수를 만들어서 0부터 시작할꺼에요 이거는 반복문 시작할때 가장 처음 한번만
// 2칸 조건을 만족하면 "cnt<10 보다 작으면" 아래있는 반복문을 실행해주세요
// 3칸 아래 조건을 다 끝냈으니까 이걸 실행시키세요 (cnt++ 'cnt를 1증가 시켜주세요')


// for문을 사용해서 이름 10번 출력하는걸 만들어보세요

// for (var i = 0; i < 10; i++) {
//  	console.log("김도현");
//  	console.log(i+1);
// }



// 아래의 4개의 for문은 같은 결과값을 가진다.

// for (let x = 0; x < 10; x++) {
// 	console.log(x);
// }

// for (let x = 0; x < 10; x++) {
// 	console.log(++x);				아래의 코드와 동일
// } 변수앞에 붙는 ++연산자는 다른 실행문이 반복 되기 전 가장 먼저 실행된다.

// for (let x = 0; x < 10; x++) {
// 	console.log(x++);				
// } 변수뒤에 붙는 ++연산자는 다른 실행문이 반복 된 이후 가장 마지막에 실행된다.

// for (let x = 0; x < 10; x++) {
// 	console.log(x);
// 	x +=1;
// }

// for (let x = 0; x < 10; x++) {
// 	console.log(x);
// 	x = x + 1;
// }


//============================while=====================================

// while(조건문)
// while문의 경우 초기화(항상 필요한건 아니지만) 밖에
// 증감문은 필요시 안에 존재합니다.


// while (cnt > 0) {
//     console.log(cnt);
//     cnt--;
//     // console.log(cnt);
// }

// for (let cnt = 0; cnt < 10; cnt++)

let cnt = 1;
let result = 0;
// let static_number = Number(prompt());


// while(cnt <= 10) {
//     result = result * 5 /*static_number*/;
//     console.log("5의" + cnt + "승은" + result + "입니다.");
//     cnt++;
// }

while(cnt <= 10) {
    result = result + cnt /*static_number*/;
    console.log(result);
    cnt++;
}