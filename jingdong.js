$(function(){
  var banner=$(".middle-banner")[0];
  var imgs=$(".banner-img");
  var left1=$(".banner-left")[0];
  var right1=$(".banner-right")[0];
  var cir1=$(".circle1-li");
  var n=0;
  var next=0;
  var t=setInterval(move,3000);
  function move(){
  	next=n+1;
  	if(next>=imgs.length){
     next=0;
  	}
  	animate(imgs[n],{opacity:0},600)
  	animate(imgs[next],{opacity:1},600);
  	cir1[n].style.background="#3E3E3E";
    cir1[next].style.background="#B61B1F";
    n=next;
  }
   banner.onmouseover=function(){
   	  clearInterval(t);
      left1.style.display="block";
      right1.style.display="block";
   }
   banner.onmouseout=function(){
   	  t=setInterval(move,3000);
      left1.style.display="none";
      right1.style.display="none";
   }
   left1.onclick=function(){
   	next=n-1;
  	if(next<0){
     next=imgs.length-1;
  	}
  	animate(imgs[n],{opacity:0},600)
  	animate(imgs[next],{opacity:1},600);
  	cir1[n].style.background="#3E3E3E";
    cir1[next].style.background="#B61B1F";
    n=next;
   }
   right1.onclick=function(){
   	move();
   }

   for(var i=0;i<cir1.length;i++){
   	cir1[i].index=i;
   	cir1[i].onclick=function(){
         for(var i=0;i<imgs.length;i++){
           animate(imgs[i],{opacity:0},600)
           cir1[i].style.background="#3E3E3E"
         } 
         animate(imgs[this.index],{opacity:1},600)
         cir1[this.index].style.background="#B61B1F"
     }
   }
  var bags=$(".bags-2-m")[0];
  var img1s=$(".floor2");
  var cir2=$(".circle2-li");
  var  width1=parseInt(getStyle(bags,'width'));
  var left2=$(".bag-left")[0];
  var right2=$(".bag-right")[0];
  var n1=0;
  var next1=0;
  var t1=setInterval(move1,3000);
  function move1(){
    next1=n1+1;
    if(next1>=img1s.length){
      next1=0;
    }
      img1s[next1].style.left=width1+"px";
      animate(img1s[n1],{left:-width1},600);
      animate(img1s[next1],{left:0},600);
      cir2[n1].style.background="#6e6e6e";
      cir2[next1].style.background="#B61B1F";
      n1=next1;
  }
  left2.onclick=function(){
      next1=n1-1;
      if(next1<0){
        next1=img1s.length-1;
      }
        img1s[next1].style.left=-width1+"px";
        animate(img1s[n1],{left:width1},600);
        animate(img1s[next1],{left:0},600);
        cir2[n1].style.background="#6e6e6e";
        cir2[next1].style.background="#B61B1F";
        n1=next1;
  }
  right2.onclick=function(){
    move1();
  }
  for(var i=0;i<cir2.length;i++){
    cir2[i].index=i;
    cir2[i].onclick=function(){
      if(this.index>n1){
      img1s[next1].style.left=width1+"px";
      animate(img1s[n1],{left:-width1},600);
      animate(img1s[this.index],{left:0},600);
      cir2[n1].style.background="#6e6e6e";
      cir2[this.index].style.background="#B61B1F";
      }else if(this.index<n1){
        img1s[next1].style.left=-width1+"px";
        animate(img1s[n1],{left:width1},600);
        animate(img1s[this.index],{left:0},600);
        cir2[n1].style.background="#6e6e6e";
        cir2[this.index].style.background="#B61B1F";
      }
      n1=this.index;
      next1=this.index;
    }
  }
  bags.onmouseover=function(){
    clearInterval(t1);
    left2.style.display="block";
    right2.style.display="block"
  }
  bags.onmouseout=function(){
    t1=setInterval(move1,3000)
    left2.style.display="none";
    right2.style.display="none"
  }


  var beauty1=$(".beauty")[0];
  var beauty2=$(".beauty2")[0];
  var beauty=$(".beauty2-t",beauty1)[0];
  var img5s=$(".beautyt-turn",beauty1);
  var img5ss=$(".beautyb-turn",beauty1);
  var cir5=$(".circle3-li",beauty1);
  var  width5=parseInt(getStyle(beauty,'width'));
  var left5=$(".beauty-left",beauty1)[0];
  var right5=$(".beauty-right",beauty1)[0];
  var n5=0;
  var next5=0;
  var t5=setInterval(move5,3000)
    function move5(){
      next5=n5+1;
    if(next5>=img5s.length){
      next5=0;
    }
      img5s[next5].style.left=340+"px";
      animate(img5s[n5],{left:-340},1000);
      animate(img5s[next5],{left:0},1000);
      img5ss[next5].style.left=340+"px";
      animate(img5ss[n5],{left:-340},1000);
      animate(img5ss[next5],{left:0},1000);
      cir5[n5].style.background="#6e6e6e";
      cir5[next5].style.background="#B61B1F";
      n5=next5;

    }

  left5.onclick=function(){
      next5=n5-1;
      if(next5<0){
        next5=img5s.length-1;
      }
        img5s[next5].style.left=-340+"px";
        animate(img5s[n5],{left:340},1000);
        animate(img5s[next5],{left:0},1000);
        img4ss[next5].style.left=-340+"px";
        animate(img5ss[n5],{left:340},1000);
        animate(img5ss[next5],{left:0},1000);
        cir5[n5].style.background="#6e6e6e";
        cir5[next5].style.background="#B61B1F";
        n4=next5;
  }
  right5.onclick=function(){
        next5=n5+1;
    if(next5>=img4s.length){
      next5=0;
    }
      img5s[next5].style.left=340+"px";
      animate(img5s[n5],{left:-340},1000);
      animate(img5s[next5],{left:0},1000);
      img5ss[next5].style.left=340+"px";
      animate(img5ss[n5],{left:-340},1000);
      animate(img5ss[next5],{left:0},1000);
      cir5[n5].style.background="#6e6e6e";
      cir5[next5].style.background="#B61B1F";
      n5=next5;
     }
  for(var i=0;i<cir5.length;i++){
    cir5[i].index=i;
    cir5[i].onclick=function(){
      if(this.index>n5){
      img5s[this.index].style.left=340+"px";
      animate(img5s[n5],{left:-340},1000);
      animate(img5s[this.index],{left:0},1000);
      img5ss[next5].style.left=340+"px";
      animate(img5ss[n5],{left:-340},1000);
      animate(img5ss[this.index],{left:0},1000);
      cir5[n5].style.background="#6e6e6e";
      cir5[this.index].style.background="#B61B1F";
      }else if(this.index<n5){
        img5s[this.index].style.left=-340+"px";
        animate(img5s[n5],{left:340},1000);
        animate(img5s[this.index],{left:0},1000);
         img5ss[this.index].style.left=-340+"px";
        animate(img5ss[n5],{left:340},1000);
        animate(img5ss[this.indexn ],{left:0},1000);
        cir5[n5].style.background="#6e6e6e";
        cir5[this.index].style.background="#B61B1F";
      }
      n5=this.index;
      next5=this.index;
    }
  }
  beauty2.onmouseover=function(){
    clearInterval(t5);
    left5.style.display="block";
    right5.style.display="block"
  }
  beauty2.onmouseout=function(){
    t5=setInterval(move5,3000)
    left5.style.display="none";
    right5.style.display="none"
  }
   var car=$(".picture-right")[0];
   var carBack=$(".picture-turn")[0];
   var width4=parseInt(getStyle(carBack,"width"))
   var left4=$(".picturn-turn-left")[0];
   var right4=$(".picturn-turn-right")[0];
   function move4(){
        animate(carBack,{left:-1000},600,function(){
          var first=getFirst(carBack,"no");
          carBack.appendChild(first);
          carBack.style.left=0;
        })      
   }
   car.onmouseover=function(){
    left4.style.display="block";
    right4.style.display="block";
   }
   car.onmouseout=function(){
    left4.style.display="none";
    right4.style.display="none";
   }
   right4.onclick=function(){
      move4();
   }
   left4.onclick=function(){
       var last=getLast(carBack);
       var first=getFirst(carBack);
       insertBefore(last,first)
       carBack.style.left="-1000px"
       animate(carBack,{left:0},600)
   }
   var dayPic=$(".day-pic");
      for(var i=0;i<dayPic.length;i++){
          dayPic[i].index=i;
          dayPic[i].onmouseover=function(){
            animate(dayPic[this.index],{left:0},600);
          }
          dayPic[i].onmouseout=function(){
            animate(dayPic[this.index],{left:10},600);
          }
       }
   var dayPicFirst=$(".day-pic-first")[0];
      dayPicFirst.onmouseover=function(){
        animate(dayPicFirst,{left:20},600);
      }
      dayPicFirst.onmouseout=function(){
        animate(dayPicFirst,{left:30},600);
      }
      var lefts=$(".banner-nav");
      for(var i=0;i<lefts.length;i++){ 
         lefts[i].index=i;
         hover(lefts[i],function(){
           var rights=$(".banner-more",this);
           for(var i=0;i<rights.length;i++){
             rights[i].style.display="block";
             lefts[this.index].style.background="#F7F7F7";
           }
         },function(){
           var rights=$(".banner-more",this);
           for(var i=0;i<rights.length;i++){
             rights[i].style.display="none";
             lefts[this.index].style.background="#C81623";
           }
       })
     }
     var research_nav=$(".research-nav");
     var research_pic=$(".research-pic");
     var research_zi=$(".research-zi");
     for(var i=0;i<research_nav.length;i++){
          research_nav[i].index=i;
          research_nav[i].onmouseover=function(){
                 research_nav[this.index].style.background="#CB1C39";
                 research_zi[this.index].style.display="block";
                 animate(research_zi[this.index],{right:35},300);

           }
         research_nav[i].onmouseout=function() {
            research_zi[this.index].style.display="none";
           research_nav[this.index].style.background="#ededed"; 
            animate(research_zi[this.index],{right:-35},300);
         }
     }
      var floor=$(".floor");
      var floorLis=$(".guding-nav");
      var gudingPic=$(".guding-pic");
      var gudingZi=$(".guding-zi");
      var floorNav=$(".guding")[0]; 
      var back1=$(".special")[0];
      var flag=true;
      var now;
      var cHeight=document.documentElement.clientHeight;
      for(var i=0;i<floor.length;i++){
            floor[i].h=floor[i].offsetTop;
          window.onscroll=function(){
            var obj=document.body.scrollTop?document.body:document.documentElement;
            var top=obj.scrollTop;
              if (top>=floor[0].h) {
                    floorNav.style.display="block";
                    var navHeight=floorNav.offsetHeight;
                     floorNav.style.top=(cHeight-navHeight)/2+"px";              
              }else if(top<floor[0].h-300){
                floorNav.style.display="none";  
              }
              for(var i=0;i<floor.length;i++){
                if(top>=floor[i].h){
                  for(var j=0;j<floorLis.length;j++){
                          gudingZi[j].style.display="none";
                          gudingPic[j].style.display="block";
                  }
                  gudingPic[i].style.display="none";
                  gudingZi[i].style.display="block";
                  now=i;
                }
              }
              for(var i=0;i<floorLis.length;i++){
            floorLis[i].index=i
            floorLis[i].onclick=function(){
              animate(document.body,{scrollTop:floor[this.index].h},100);
              animate(document.documentElement,{scrollTop:floor[this.index].h},100);
              now=this.index;
            }
              floorLis[i].onmouseover=function(){
              gudingPic[this.index].style.display="none";
                  gudingZi[this.index].style.display="block";
               
             }
               floorLis[i].onmouseout=function(){
                if(this.index==now){
                  return;
                }
                 gudingZi[this.index].style.display="none";
                       gudingPic[this.index].style.display="block";
             }
          }       
          back1.onclick=function(){
            animate(document.body,{scrollTop:0},100);
            animate(document.documentElement,{scrollTop:0},100)
          }
        }
      }
      // 选项卡
      function xuxiangka(obj){
        var box=obj;
        var option_nav=$(".option-nav",box);
        var option_lis=$(".option-lis",box);
        var hidden=$(".hidden",box);
          for(var i=0;i<option_nav.length;i++){
          option_nav[i].index=i;
         option_nav[i].onmouseover=function(){
            for(var i=0;i<hidden.length;i++){
              hidden[i].index=i;
              hidden[i].style.display="none";
              
            }
             hidden[this.index].style.display="block";
            this.style.cssText="border-color: #E5004F;border-bottom:0";
            for(var i=0;i<option_lis.length;i++){
              option_lis[i].style.cssText="display:none;"
            }option_lis[this.index].style.cssText="display:block;"
          }
        }
      }
      xuxiangka($(".bags")[0]);
      xuxiangka($(".beauty")[0]);
      xuxiangka($(".phone")[0]); 
      xuxiangka($(".home")[0]);
      xuxiangka($(".computer")[0]);
      xuxiangka($(".sport")[0]);
      xuxiangka($(".toy")[0]);
      xuxiangka($(".living")[0]);
      xuxiangka($(".food")[0]);
      xuxiangka($(".book")[0]);
      xuxiangka($(".car")[0]);
   var leftsss=$(".select");
   var buding=$(".buding");
      for(var i=0;i<leftsss.length;i++){ 
         leftsss[i].index=i;
         hover(leftsss[i],function(){
           var rightsss=$(".select-lis",this);
           for(var i=0;i<rightsss.length;i++){
             rightsss[i].style.display="block";
             leftsss[this.index].style.background="#fff";
             buding[this.index].style.display="block";
           }
         },function(){
           var rightsss=$(".select-lis",this);
           for(var i=0;i<rightsss.length;i++){
             rightsss[i].style.display="none";
             leftsss[this.index].style.background="";
             buding[this.index].style.display="none";
           }
       })
     }
     var car6=$(".day3")[0];
     var carBack6=$(".henchang")[0];
     var t6=setInterval(move6,2000)
     function move6(){
          animate(carBack6,{top:-120},600,function(){
            var first6=getFirst(carBack6,"no");
            carBack6.appendChild(first6);
            carBack6.style.top=0;
          })      
     }
      var leftss=$(".phone-left");
       var rightss=$(".phone-right");
     function change(obj2){
        var obj2=obj2;
        var cir4=$(".circle4-li",obj2);
        var imgss=$(".kind3",obj2);
        var leftss=$(".phone-left",obj2)[0];
        var rightss=$(".phone-right",obj2)[0];
        var imgsss=$(".dakuang",obj2)[0];
        var n4=0;
        var next4=0;
        var flag=true;
        imgss[0].style.left="0";
        var t4=setInterval(move7,3000);
         function move7(){
              next4=n4+1;
              if(next4>=imgss.length){
               next4=0;
              }
              if(flag==false){
                  return;
                }
                flag==false;
                cir4[n4].style.background="#D2D1CF";
                cir4[next4].style.background="#E40077";
                imgss[next4].style.left="-439px";
                animate(imgss[n4],{left:439},600);
                animate(imgss[next4],{left:0},600,function(){
                  flag==true;
                });
                n4=next4;
            }
       for(var i=0;i<cir4.length;i++){
        cir4[i].index=i;
        cir4[i].onclick=function(){
          if (this.index<n4) {
            imgss[this.index].style.left=-"439px";
            animate(imgss[n4],{left:439},600);
           }else if(this.index>n4){
            imgss[this.index].style.left="439px";
            animate(imgss[n4],{left:-439},600);
           }
                animate(imgss[this.index],{left:0},600);
                cir4[n4].style.background="#D2D1CF";
                cir4[this.index].style.background="#E40077";   
              n4=this.index;
          }
       }
       rightss.onclick=function(){
        next4=n4-1;
        if(next4<0){
          next4=imgss.length-1;
        }
        if(flag==false){
          return;
        }
        flag==false;
        cirs[n4].style.background="#D2D1CF";
         cirs[next4].style.background="#E40077";
        imgss[next4].style.left="439px";
        animate(imgss[n4],{left:-439},600);
        animate(imgss[next4],{left:0},600,function(){
          flag==true;
        });
        n4=next4;
       }
       leftss.onclick=function(){
        next4=n4+1;
        if(next4>=imgss.length){
          next4=0;
        }
        if(flag==false){
          return;
        }
        flag==false;
         cir4[n4].style.background="#D2D1CF";
         cir4[next4].style.background="#E40077";
        imgss[next4].style.left="-439px";
        animate(imgss[n4],{left:439},600);
        animate(imgss[next4],{left:0},600,function(){
          flag==true;
        });
        n4=next4;
       }
       imgsss.onmouseover=function(){
        leftss.style.display="block";
        rightss.style.display="block";
             }
              imgsss.onmouseout=function(){
        leftss.style.display="none";
        rightss.style.display="none";
             }
       
      }
     
  change($(".phone")[0]);
  change($(".home")[0]);
  change($(".computer")[0]);
  change($(".car")[0]);
  change($(".book")[0]);
  change($(".mingpin")[0]);
})        
      xuxiangka($(".bags")[0]);
      xuxiangka($(".beauty")[0]);
      xuxiangka($(".phone")[0]); 
      xuxiangka($(".home")[0]);
      xuxiangka($(".computer")[0]);
      xuxiangka($(".sport")[0]);
      xuxiangka($(".toy")[0]);
      xuxiangka($(".living")[0]);
      xuxiangka($(".food")[0]);
      xuxiangka($(".book")[0]);
      xuxiangka($(".car")[0]); 