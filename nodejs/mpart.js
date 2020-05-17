var M = {
  v : 'v',
  f:function(){
    console.log(this.v);
  }
}

//모듈이 담긴 mpart.js에 있는 기능들 중에서 m이가리키는 객체를 외부에서도 사용할 수 있도록 export하겠다 라는 의미
module.exports = M;
