let onload = document.getElementById('excuse');
let who = ['My mom', 'The teacher', 'The bus driver', 'My bestfriend']
let what = ['eat', 'crushed', 'broked', 'pissed']
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying']


function random_item(items)
{
return items[Math.floor(Math.random()*items.length)];
}


var resultado = (random_item(who) + ' '+ random_item(what) + ' ' +random_item(when));
onload.innerHTML = resultado;
