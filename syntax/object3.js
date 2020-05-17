var p = {
  v1:'v1',
  v2:'v2',
  f1:function (){
      console.log(this.v1);
    },
  f2:function(){
    console.log(this.v2);
  }
}
//function은 값이고, 객체는 값을 저장하는 그릇이고, 해당 함수 안에서 접근하기 위해서 사용하는 키워드는 this임

p.f1();
p.f2();
