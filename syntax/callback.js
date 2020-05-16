/*
function a(){
  console.log('A');
}*/
//위와 아래가 같음 자바스크립트에서는 함수가 값
var a = function(){
  console.log('A');
}

function slowfunc(callback){
  callback();
}

slowfunc(a);
//callback을 호출하면 a가 들어가게 됨
