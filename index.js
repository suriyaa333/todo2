var taskcount=4;
var entirelist=[0,1,2,3];
var finished=[];

var back=$(".list");

function addtask(){
var b=document.querySelector(".formc").value;

var a='<a class="bg-dark list form list-group-item list-group-item-action"><spam class="symbol" id="t3">O</spam><span class="tex">'+b+'</span><h3 class="cross text-warning">X</h3></a>';
var l=entirelist.length;
entirelist.push(l);

$(".lis").append(a);
back=$(".list");
for(i=0;i<document.querySelectorAll(".cross").length;i++){
    document.querySelectorAll(".cross")[i].addEventListener("click",function(event){
        var allcross=document.querySelectorAll(".cross");
        var ind=Array.from(allcross).indexOf(event.target);
        finished.push(ind);
        
        document.querySelectorAll(".tex")[ind].classList.add("strike");
        document.querySelectorAll(".list")[ind].classList.add("dummy");
        
        document.querySelectorAll(".symbol")[ind].innerHTML='<i class="far fa-check-circle"></i>';
    
    })
    }

}

function checkcount(){
    var co=0;
   
    for(var i=0;i<document.querySelectorAll(".tex").length;i++)
    {
        if(!(document.querySelectorAll(".tex")[i].classList.contains("strike")))
        co++;

    }
    document.getElementById("num").innerHTML=co;
}


var i;

for(i=0;i<document.querySelectorAll(".cross").length;i++){
document.querySelectorAll(".cross")[i].addEventListener("click",function(event){
    var allcross=document.querySelectorAll(".cross");
    var ind=Array.from(allcross).indexOf(event.target);
    finished.push(ind);
    
    document.querySelectorAll(".tex")[ind].classList.add("strike");
    document.querySelectorAll(".list")[ind].classList.add("dummy");
    document.querySelectorAll(".symbol")[ind].innerHTML='<i class="far fa-check-circle"></i>';
    
})
}
function showcompleted(){
    backup();
    const ar=$(".list");
    for (let a of ar) {
        if(!(a.classList.contains("dummy")))
        $(".list")[Array.from($(".list")).indexOf(a)].remove();
      }
   

}
function showactive(){
    backup();
    const ar=$(".list");
    for (let a of ar) {
        if(a.classList.contains("dummy"))
        $(".list")[Array.from($(".list")).indexOf(a)].remove();
      }
}
function backup(){
    $(".lis").append(back);
}
$("#fun1").click(function(){
    backup();
});
$("#fun2").click(function(){
    showactive();
});

$("#fun3").click(function(){
    showcompleted();
});
document.addEventListener("click",function(){
    checkcount();
})
$(".mybut").click(function(){
    addtask();
});
   
   