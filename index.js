var taskcount=4;
var entirelist=[0,1,2,3];
var finished=[];

var back=$(".list");

function addtask(){
var b=document.querySelector(".form1").value;
var d=document.querySelector("#monthanddate").value;
var t=document.querySelector("#time").value;


var a='<a class="bg-dark list form list-group-item list-group-item-action"><spam class="symbol" id="t3">O</spam><span class="tex">'+b+'</span><span class="date">'+d+' '+t+'</span><h3 class="cross text-warning">X</h3></a>';
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
    sorts();
    check();

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


function sorts(){

    var dict={
        Jan:1,
        Feb:2,
        Mar:3,
        Apr:4,
        May:5,
        Jun:6,
        Jul:7,
        Aug:8,
        Sep:9,
        Oct:10,
        Nov:11,
        Dec:12,

    }
    var alltimes=[];
    for(var i=0;i<document.querySelectorAll(".date").length;i++){
        var s=$(".date")[i].innerHTML;
        s=s.split(" ");
        var month=dict[s[0]];
        var dat=s[1];
        var time=s[2];
       
        var currenttime={
            "month":month,
            "date":dat,
            "time":time

        }
       
        alltimes.push(currenttime);
        

    }
    var indices=[];
    for (var i = 0; i < alltimes.length; ++i) 
    indices[i] = i;

  
    var a=Array.from($(".list"));
    indices.sort(function(a,b){
        if(alltimes[a].month<alltimes[b].month)
    return -1;
    else if(alltimes[a].month>alltimes[b].month)
    return 1;
    else{
        if(alltimes[a].date<alltimes[b].date)
        return -1;
        else if(alltimes[a].date>alltimes[b].date)
        return 1;
        else{
            var s1=parseInt(alltimes[a].time.replace(":",""));
            var s2=parseInt(alltimes[b].time.replace(":",""));
            if(s1<s2)
            return -1;
            else if(s1>s2)
            return 1;
            else
            return 0;
            
        }
    }
    });
    
    for(var i=0;i<indices.length;i++)
    {
        if($(".list")[indices[i]].classList.contains("dummy"))
        var s='<a  class="bg-dark list form list-group-item list-group-item-action dummy">'+$(".list")[indices[i]].innerHTML;
        else
        var s='<a  class="bg-dark list form list-group-item list-group-item-action ">'+$(".list")[indices[i]].innerHTML;
        
       
        $(".lis").append(s);
    }
   
   removehalf();
   
    back=$(".list");
    for(i=0;i<$(".cross").length;i++){
        document.querySelectorAll(".cross")[i].addEventListener("click",function(event){
            back=$(".list");
            var allcross=document.querySelectorAll(".cross");
            var ind=Array.from(allcross).indexOf(event.target);
            finished.push(ind);
            
            document.querySelectorAll(".tex")[ind].classList.add("strike");
            document.querySelectorAll(".list")[ind].classList.add("dummy");
            
            document.querySelectorAll(".symbol")[ind].innerHTML='<i class="far fa-check-circle"></i>';
        
        })
        }

}
function removehalf(){
   
    var l=($(".list").length)/2;
    var i=0;
    while(i<l)
    {
        $(".list")[0].remove();
        i++;
    }
}

var i;
for(i=0;i<$(".cross").length;i++){
    document.querySelectorAll(".cross")[i].addEventListener("click",function(event){
        back=$(".list");
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

function check(){
    var currentdate=new Date();
   
    var dict={
        Jan:1,
        Feb:2,
        Mar:3,
        Apr:4,
        May:5,
        Jun:6,
        Jul:7,
        Aug:8,
        Sep:9,
        Oct:10,
        Nov:11,
        Dec:12,

    }
   
    for(var i=0;i<document.querySelectorAll(".date").length;i++){
        var s=$(".date")[i].innerHTML;
        s=s.split(" ");
        var month=dict[s[0]];
        var dat=s[1];
        var time=parseInt(s[2].replace(":",""));
     
        var currdate=currentdate.getDate();
        var currmonth=currentdate.getMonth()+1;
        var mi=""+currentdate.getMinutes();
        if(mi.length==1)
        mi='0'+mi;
        var currtime=parseInt(""+currentdate.getHours()+mi);
      
        if(currmonth>month){
        $(".list")[i].classList.remove("bg-dark");
        $(".list")[i].classList.add("back");
        }
        else if(currmonth===month)
        {
          
            if(currdate>dat)
            {
                
                $(".list")[i].classList.remove("bg-dark");
                $(".list")[i].classList.add("back");
            }
            else if(currdate==dat)
            {
             
                if(currtime>time)
                {
                   
                    $(".list")[i].classList.remove("bg-dark");
                    $(".list")[i].classList.add("back");
                }
            }
        }

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
sorts();
check();
$("#fun3").click(function(){
    showcompleted();
});
document.addEventListener("click",function(){
    checkcount();
})
$(".mybut").click(function(){
    addtask();
});
   



