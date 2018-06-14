var oll=document.getElementsByName("li");
 for(var i in oll){
     oll.index=i;
     oll[i].onclick=function(){
         /* console.log(433) */
         for(var j in oll){
             oll[j].className="";
         }
         all[this.index].className="active";
     }
 }