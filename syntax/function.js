function f123(){
  console.log(1);
  console.log(2);
  console.log(3);
}
//round는 반올림해주는 함수
console.log(Math.round(1.6));
function sum(first, second){//parameter
  return first+second;//return을 만나면 그 즉시 함수를 종료한다!
}
sum(1,2);//argument=인자
console.log(sum(1,2));
//출력을 하는건 융통성이 없다! round처럼 어디서든 사용할 수 있 것이 가능한게 좋은 함수
