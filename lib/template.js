module.exports ={
  //각 html을 중복되지 않기 위해 만든 함수, 리스트는 밑의 리스트함수를 이용, body도 객체화 시킴
  HTML:function (title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB2 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list://리스트를 data파일에 있는 파일의 수에 맞춰서 각 이름을 가져와서 리스트화 시키는 함수
  function (filelist){
    var list = '<ul>';
    var i=0;
    while(i < filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li> `;
      i++;
    }
    list = list+'</ul>';
    return list;
  }
}
