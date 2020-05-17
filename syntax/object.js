var members = ['egoing', 'k805', '9do'];
console.log(members[0]);
var i = 0;
while(i<members.length){
  console.log('myloop', members[i]);
  i++;
}
var roles = {'programmer' : 'egoing',
'designer' : 'k8805' ,
'manager' : '9do'};

console.log(roles.designer);
for(var name in roles){
  console.log('2loop => ', name, 'value => ', roles[name]);
}
