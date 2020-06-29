//头部效果
(function(){
    var bannerLB = document.getElementById("bannerLB");
    var package = document.getElementById("package");
    var oul = document.querySelector("#package ul.list");
    var oli = document.querySelectorAll("#package ul.list li");
    var l = document.getElementById("l");
    var r = document.getElementById("r");
    var len = oli.length;
    var index=0;
    
     //划过小圆点跳转
       
     function change () {
        oli.forEach(function(ele,i){
            if ( index === i ) {
                ele.classList.add("active");
            }else{
                ele.classList.remove("active");
            }

            bannerLB.style.marginLeft = -1226*index + "px";  
        });
    }
    //li的事件
   oli.forEach(function(ele,i){
        ele.onmouseenter = function(){
            index = i;
            change();
        };
    });
    //点击左右按键切换轮播
        r.onclick = function(){
            index++;
            if(index>4){index=0;}
            change();

        };
        l.onclick = function(){
            index--;
            if(index<0){index=4;}
            bannerLB.style.marginLeft = -1226*index + "px";
            change();
        };
        //定时器
        var timer = setInterval(function(i){
            index++;
            if(index>4){index=0}
            change(); 
        },6000);
        
       

})();

//小米闪购效果
(function(){
    setInterval(function(){
        var Houer = document.getElementById("Hour"),
        Minute = document.getElementById("Minute"),
        Second = document.getElementById("Second");

        var date = new Date();

        Houer.innerText =20 - date.getHours();
        Minute.innerText =60 - date.getMinutes();
        Second.innerText =60 - date.getSeconds();
    },1000);

    var iL = document.querySelectorAll(".miflashsaleLB-bu i"),
        miflashsaleLB = document.getElementById("miflashsaleLB");
    // console.log(iL);
    iL.forEach(function(ele,i){
        ele.onclick = function(){
            index = i;
            miflashsaleLB.style.marginLeft = -991*index + "px";
        }
    })
})();

//轮播图效果

    var homeUL = document.querySelectorAll("#main .homeele .homeele-r ul");
    var XK = document.querySelectorAll(".main-nav span");

    
    for(var i = 0 ; i < XK.length ; i++){
        XK[i].index = i;
        XK[i].onmouseenter = function(){
             //先把所有的名字全给去掉了。
             for ( var j=0;j<XK.length;j++ ){
                homeUL[j].classList.remove("show");
                XK[j].classList.remove("active");
            }

            //然后再给当前的这个加对应的显示名字
            homeUL[ this.index ].classList.add("show");
            this.classList.add("active");
        }
    }