var text=document.querySelector("#ch-1")
var p1=document.querySelector("#c1")
var p2=document.querySelector("#c2")
var ii1=document.querySelector("#i1")
var ii2=document.querySelector("#i2")
var num =0;
p1.addEventListener("click",()=>{
    if(num==0){
        p1.style.display="none";
        p2.style.display="block";
        ii1.style.display="none";
        ii2.style.display="block";

        num=1;
    }
    
})
p2.addEventListener("click",()=>{
    if(num==1){
        p2.style.display="none";
        p1.style.display="block";
        ii2.style.display="none";
        ii1.style.display="block";
        num=0;
    }
    
})



