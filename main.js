var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
//qs는 querystring이고 nodejs가 가지고 있는 module을 가지고 오는
var template = require('./lib/template.js');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname;
    console.log(pathname);
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = "Welcome to MyPAGE";
          var description = "Hello, Node.js";
          var list = template.list(filelist);
          var html = template.HTML(title, list,
            `<h2>${title}</h2><hr/>${description}`,
            `<a href="/create">create</a>`);
          response.writeHead(200);
          response.end(html);
        });
      }else{
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){
            var title = queryData.id;
            var list = template.list(filelist);
            var html = template.HTML(title, list,
              `<h2>${title}</h2><hr/>${description}`,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a> <form action="delete_process" method="post" onsubmit="Are you sure?">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
            </form>
            `);
            response.writeHead(200);
            response.end(html);
          });
      });
    }
  }
  else if(pathname === '/create'){
    fs.readdir('./data', function(error, filelist){
      var title = "WEB - create";
      var list = template.list(filelist);
      var html = template.HTML(title, list, `
        <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
            </p>
            </form>
        `, '');
      //웹서버가 응답할때 기계끼리 주고 받는 통신어 200-성공 404-에러
      response.writeHead(200);
      response.end(html);
    });
  }else if(pathname ==='/create_process'){
    var body = '';
    request.on('data', function(data){
      body = body+data;
    });//방대한양의 데이터를 대비한 사용방법 function부분은 callback부분 조각부분을 수신할때 마다 이 콜백 함수를 호출하도록 약속, data를 인자로 수신한 정보를 주는
    request.on('end',function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
      });
    });//정보수집이 끝났을 때


  }else if(pathname === '/update'){
    fs.readdir('./data', function(error, filelist){
      fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){
        var title = queryData.id;
        var list = template.list(filelist);
        var html = template.HTML(title, list,
          `
          <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
              </p>
              </form>
          `,
        `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
        response.writeHead(200);
        response.end(html);
      });
  });
}else if(pathname === '/update_process'){    var body = '';
    request.on('data', function(data){
      body = body+data;
    });
    request.on('end',function(){
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description
      fs.rename(`data/${id}`, `data/${title}`, function(error){
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
      });
    });

}else if(pathname === '/delete_process'){    var body = '';
    request.on('data', function(data){
      body = body+data;
    });
    request.on('end',function(){
      var post = qs.parse(body);
      var id = post.id;
      fs.unlink(`./data/${id}`, function(error){
        response.writeHead(302, {Location: `/`});
        response.end();
      })
    });

}

  else{
    //웹서버가 응답할때 기계끼리 주고 받는 통신 404-에러
      response.writeHead(404);
      response.end("Not Found");
     }
  });
app.listen(3000);
