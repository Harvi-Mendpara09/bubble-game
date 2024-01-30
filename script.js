var timer = 60;
var score = 0;
var hitnum;
var pbottom = document.querySelector("#p-bottom");
function makeBubble(){
    var clutter = ''
    for(var i = 1; i <=90; i++ ){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    pbottom.innerHTML = clutter;
}
function runTimer(){
    var timeint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time-value").textContent = timer;
        }else{
            clearInterval(timeint);
            pbottom.innerHTML=`<h1>GAME OVER</h1>`;
        }
    },1000)
}
function newHit(){
    hitnum = Math.floor(Math.random()*10);   
    document.querySelector("#hit-value").textContent = hitnum;
}
function increaseScore(){
    score+= 10;
    document.querySelector("#score-value").textContent=  score;
}
pbottom.addEventListener("click",function(dets){
    var clicked = Number((dets.target.textContent))
    if(clicked == hitnum){
        increaseScore();
        newHit();
        makeBubble();
    }
})


newHit();
runTimer();
makeBubble();