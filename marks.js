'use strict';
document.getElementById("btn").addEventListener("click",function(){
    var s1=document.getElementById("a").value; 
    var s2=document.getElementById("b").value; 
    var s3=document.getElementById("c").value; 
    var s4=document.getElementById("d").value; 

    var v=parseInt(s1);
    var w=parseInt(s2);
    var x= parseInt(s3);
    var y=parseInt(s4);

    var res=v+w+x+y;
    var per=Math.round(res/4);
    var msg="";
    if(per<40){
        msg="you are failed try next time!";
    }else{
        if(per<50){
            msg="you are passed with minimum marks";
        }else if(per<60){
            msg="you are passed with good marks";
        }else if(per<75){
            msg="you passed with distinction";
        }else if(per<85){
            msg="you passed with first class with distinction";
        }else if(per<90){
            msg="congratulations you are passed with highest marks in exam";
        }else{
            msg="better try next time";
        }
    }

    document.getElementById("mark").innerHTML=`<P>total marks :${res}</p>
                 <P>percentage: ${per} </p>
                 <p>grade:${msg}</p>  `

})