console.log("javascript fileeee")
var n=10
var n="pratham"
var israd=true
if(n==10){
    console.log("n is 10");
}
else{
    console.log("n is not 10");
}
document.getElementById("box").innerHTML=n;

var g=['cake','chocolate','icecream']
for(var i=0;i<g.length;i++){
    console.log(g[i]);
}

function listg(){
    for(var i=0;i<g.length;i++){
        console.log(g[i]);
}
}
listg();

document.getElementById("box").addEventListener("click",function(){
    alert("button clicked");
});