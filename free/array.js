// 먹고싶은 음식 선택

// let number = [ 'apple', ' pineapple', 'watermelon' ];
// let answer;



// console.log("어떤 과일을 드시고 싶으신가요?");
// console.log("1. apple  2. pineapple  3. watermelon");
// answer = prompt();

// console.log(number[answer+1]);

// answer = 0;




// 우리반 애들 번호

// let number = ['강대윤' , '김도연' , '김도현' , '김민영' , '김연성' , '김유민' , '김재민' , '김희진' ];

// console.log("몇번?");

// answer = prompt();

// console.log(number[answer]);

// function array (number_array) {

//     for (let i = 0; i < number_array.length; i ++) {
//         console.log(number_array[i]);
//     }
// }
// array(number);

// // 함수 기본적으로 인풋 아웃풋

// function return_array_length(arr, index){
//     return arr[index]
// }

// console.log(return_array_length(number, 3))





// let number = [1,2,3,4];

// function number_result(numbers) {

//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return result;
// }

// console.log(number_result(number));

// let number1 = 1;
// let number2 = 2;

// function multiple_return(num_1 , num_2){
    
//     let num_plus = num_1 + num_2;
//     let num_minus = num_1 - num_2;
//     let num_3 = num_1 * num_2;
//     let num_4 = num_1 / num_2;

//     return Array(num_plus, num_minus, num_3, num_4) 
// }

// let arr = multiple_return(number1, number2)
// console.log(arr)


// function countdown(number){
//     if(number === 0){
//         return 0;
//     } else if (number === 1) {
//         return 1;
//     } else {
//         return countdown(number-1) + countdown(number-2);
//     }
    
// }

// console.log(countdown(9))

// let dohyeon = {'이름' : '김도현', '나이': '18', '직업': '학생'}

// let dohyeon = {};
// dohyeon["이름"] = "김도현";
// dohyeon["나이"] = "18";
// dohyeon["직업"] = "학생";

// console.log(dohyeon);

// let keys = Object.keys(dohyeon);

// for (let i = 0; i < keys.length; i++) {
//     // console.log("key는 " + keys[i] + "  value는 " + dohyeon[keys[i]] + "입니다.");
//     console.log("key는 %s value는 %s 입니다.", keys[i], dohyeon[keys[i]]);
// }

// console.log(dohyeon);

// dohyeon['학번'] = '21003';

// console.log(dohyeon);

// let sajeon = { 'a' : 'apple', 'b' : 'bannana', 'c' : 'cat', 'd': 'dog'}

// let keys = Object.keys(sajeon);

// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
//     console.log(sajeon[keys[i]]);
// }

// console.log(sajeon);

// let answer = prompt();


// console.log(sajeon[answer]);

// let number_1 = 5;
// let number_2 = 5;

// function a (plus , minus) {

//     let result = plus + 1 - minus;
//     return result;

// }

// console.log(a(number_1, number_2));


let user = { '아이디': 'asdasd', '비밀번호': '123456', '성별': '남', '이름': 'XXX', '나이': '23', '이메일': '123456@gmail.com' };

let array = new Array(5);



for (let i = 0; i < array.length; i++) {

    array[i]={};
    array[i]["이름"] = prompt();
    array[i]["번호"] = prompt();
    array[i]["성별"] = prompt();
    
}
console.log(array);