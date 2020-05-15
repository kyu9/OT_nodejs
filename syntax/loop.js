//배열 생성방법(c)
var arr = ['a','b','c','d'];
//배열읽는 방법(r)
console.log(arr[2]);
//배열을 업데이트(u)
arr[2]=3;
console.log(arr);
console.log(arr.length);
//배열에 값을 추가할때는 push!
arr.push("E");
console.log(arr);

//array&loop
var number = [1,400,12,34,5];
var i =0, total=0;
while(i<number.length){
  console.log(number[i]);
  total = total+number[i];
  i++;
}
console.log(total);
