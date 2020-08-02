function changeColorGenarator(){
    var strArray="ABCDEF0123456789";
    var strAdd="#";
    for(var i=0;i<6;i++){
        var random=Math.floor(Math.random()*strArray.length)
        strAdd+=strArray.charAt(random);
    }
    return strAdd;
}
var snow,counter;

function animation(element){
    var timer=setInterval(function(){
        
        element.style.top =(parseInt(element.style.top.split("px")[0]) + (Math.random()*5)).toString()+"px";
        if(element.style.top.split("px")[0] > window.innerHeight){
            element.style.top = "0px";
            counter ++;
        }
        if(counter > 5){
            clearInterval(timer);
            element.style.top = window.innerHeight+"px";
        }
    },5);
}
for(var i=0;i<100;i++){
    snow=document.createElement("div");
    snow.classList.add("snow");
    snow.style.backgroundColor=changeColorGenarator();
    snow.style.top=Math.floor(Math.random()*window.innerHeight-50).toString()+"px";
    snow.style.left=Math.floor(Math.random()*window.innerWidth-50).toString()+"px";
    document.body.appendChild(snow);
    animation(snow);
}