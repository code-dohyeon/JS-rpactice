// --------------------alert 연습----------------------
// console.log("김도현");
// alert("이것은 경고창입니다.");

// console.log(prompt());

// let n = prompt();



//------------3개 숫자 입력받아 더해 콘솔에 나타내기--------------
// 1번째 방법 let n = Number(prompt());
// 2번째 방법 n = Number(n);
// 문자열을 숫자로 바꿔준다.
// console.log(n+10);

// let a = Number(prompt());
 // let b = Number(prompt());
 // let c = Number(prompt());

// console.log(a+b+c);



//---------prompt 입력받아 html에 입력하기-------------------
// document.getElementById('h1').innerHTML = prompt();

function alert_button() {
	alert("마 이게 경고창이다!");	
}

function style_change() {
	document.querySelector('h1').classList.toggle("color");
}

const ball = document.querySelector('.ball');

  window.addEventListener('click', function (e) {
    ball.style.transform = 'translate(' + (e.clientX - 15) + 'px, ' + (e.clientY - 15) + 'px)';
  });






