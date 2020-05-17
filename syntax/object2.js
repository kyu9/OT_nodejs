// array, object
//배열과 객체는 모두 서로 연관된 데이터를 담는 그릇
//자바스크립트에서는 처리방법을 그룹핑하는 것도 데이터이기때문에 배열에 담는 것이 가능하다.
//자바스크립트는 함수는 값이다.
var f = function(){
  console.log(1+1);
  console.log(1+2);
}
/* case1
console.log(f);
f();*/

//case 2
var a = [f];
a[0]();

//case 3
var o = {
  func:f
}

o.func();
