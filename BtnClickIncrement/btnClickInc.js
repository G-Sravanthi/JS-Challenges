
var btn = document.getElementById('button1');
var count = 1;

btn.innerHTML = "Like : 0";

function countClick(){
    btn.innerHTML = 'Like : ' + count++;
};