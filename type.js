let event = document.getElementById('excuse');



let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


var a = Math.floor(Math.random()* who.length)

var sentence = who[a]+" " + what[a]+" " + when[a];

event.innerHTML = sentence;
