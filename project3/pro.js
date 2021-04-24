var myLi=[];
var contactpic=document.getElementById("miContact");
var headButton = document.getElementById("headButton");
var secUl=document.querySelectorAll("#secUl li");
var aside0=document.querySelectorAll(".aside0 div img");
var aside=document.querySelectorAll(".aside div img");
var change = document.querySelectorAll("#changeNum li");
var myli1=[];
var myChange=[];
  change.forEach((a,i)=> {
    //put id for list for changing the pics
        a.setAttribute("id", "chan"+(i+1));
    });
for(var i=2;i<=5;i++) {
    myChange[i]=document.getElementById("chan"+i);
}
secUl.forEach((ele, i) => {
    ele.setAttribute("id", "myli"+(i+1));
});
aside0.forEach((e,j) => {
         e.setAttribute("id", "myimg"+(j+1));
});
     aside.forEach((ele, j) => {
         ele.setAttribute("id", "myimg"+(j+6));
    });
for(var i=1;i<=5;i++) {
    myli1[i]=document.getElementById("myli"+i);
}
//print the first list in the top of page when we click for it
function color(a) {
       for(var i=1; i<=4; i++) {
         myLi[i].style.backgroundColor="#dbd7d6";
         myLi[i].style.padding="8px 11px";
    }
    for(var i=1; i<=4; i++) {
     if(a==i) {
         continue;
     }else {
          myLi[i].style.backgroundColor="#fff9f9";
          myLi[i].style.padding="0px";
     }
    }
       if(a==2) {
           headButton.style.backgroundColor="#dbd7d6";
           headButton.style.border="1px solid #dbd7d6";
        }else {
           headButton.style.backgroundColor="#fff9f9";
           headButton.style.border="1px solid #fff9f9";
        }
    if(a==4) {
        //add list of choices in the top of page of contact
           contactpic.innerHTML="<img src=logo.jpg class=img4>  <ul class=myul><li onclick=home()><a href=#home id=li1>HOME</a></li><li onclick=service()><a href=#service id=li2>SERVICES<button id=headButton>V</button></a></li><li onclick=aboutUs()><a href=#about id=li3>ABOUT US</a></li><li onclick=ContactUs()><a href=#Contact id=li4>CONTACT US</a></li></ul>";
        }else {
          contactpic.innerHTML="";
        }
}
// change the color of the list when we click for it
function colorli(p) {
   for(var i=1;i<=5;i++) {
    if(i==p) {
         myli1[i].style.backgroundColor="#ff2f63";
    }else {
         myli1[i].style.backgroundColor="#ff9d9c";
    }
  }
    if(p==1) {
        document.getElementById("mySpan").style.backgroundColor="#ff2f63";
        document.getElementById("mySpan").style.border="1px solid #ff2f63";
    }else {
         document.getElementById("mySpan").style.backgroundColor="#ff9d9c";
         document.getElementById("mySpan").style.border="1px solid #ff9d9c";
    }
}
for(var i=1; i<=4; i++) {
    myLi[i]=document.getElementById("li"+i);
}
function home() {
    "use strict";
    color(1);
    contactpic.innerHTML="";
}
function service() {
    "use strict";
    color(2);
    contactpic.innerHTML="";
}
function aboutUs() {
    "use strict";
    color(3);
    contactpic.innerHTML="";
}
function ContactUs() {
    "use strict";
    color(4);
}
document.getElementById("myli1").addEventListener("click", all);
document.getElementById("myli2").addEventListener("click", web);
document.getElementById("myli3").addEventListener("click", graphics);
document.getElementById("myli4").addEventListener("click", design);
document.getElementById("myli5").addEventListener("click", logo);
//change the color of the number when we change the list
  function changeColor(p) {
       for(var i=2;i<=5; i++) {
           if(i===p) {
              myChange[i].style.backgroundColor="#ff2f63"; 
           }else {
              myChange[i].style.backgroundColor="#ff9d9d";  
           }
       }
    }
function all() {
    "use strict";
    colorli(1);
    aside0.forEach((e,j) => {
         e.setAttribute("src", (j+31)+".jpg");
});
     aside.forEach((element, i) => {
        element.setAttribute("src", (i+36)+".jpg");
    });
    changeColor(2);
    // change list when we clicked on the button > or <
     var greaterthan = document.getElementById("chan6");
     var lowthan = document.getElementById("chan1");
     //change list with >
     greaterthan.onclick = function() {
     var defineId = document.getElementById("myimg5");
     var defineId1 = document.getElementById("myimg10");
      switch(defineId.getAttribute("src")) {
           case "35.jpg":
            aside0.forEach((e,j) => {
                e.setAttribute("src", (j+11)+".jpg");
            });
              changeColor(3);
                break;
         case "15.jpg":
            aside0.forEach((e,j) => {
                e.setAttribute("src", (j+21)+".jpg");
            });
              changeColor(4);
                break;
         default:
            aside0.forEach((e,j) => {
                e.setAttribute("src", (j+1)+".jpg");
            });
              changeColor(5);
              break;   
      }
     switch(defineId1.getAttribute("src")) {
           case "40.jpg":
            aside.forEach((e,j) => {
                e.setAttribute("src", (j+16)+".jpg");
            });
                break;
         case "20.jpg":
            aside.forEach((e,j) => {
                e.setAttribute("src", (j+26)+".jpg");
            });
                break;
         default:
            aside.forEach((e,j) => {
                e.setAttribute("src", (j+6)+".jpg");
            });
              break;   
      }
  } 
     //change list with <
     lowthan.onclick = function() {
     var defineId = document.getElementById("myimg5");
     var defineId1 = document.getElementById("myimg10");
      switch(defineId.getAttribute("src")) {
           case "5.jpg":
            aside0.forEach((e,j) => {
                e.setAttribute("src", (j+21)+".jpg");
            });
              changeColor(4);
                break;
         case "25.jpg":
            aside0.forEach((e,j) => {
                e.setAttribute("src", (j+11)+".jpg");
            });
              changeColor(3);
                break;
         default:
            aside0.forEach((e,j) => {
                e.setAttribute("src", (j+31)+".jpg");
            });
              changeColor(2);
              break;   
      }
     switch(defineId1.getAttribute("src")) {
           case "10.jpg":
            aside.forEach((e,j) => {
                e.setAttribute("src", (j+26)+".jpg");
            });
                break;
         case "30.jpg":
            aside.forEach((e,j) => {
                e.setAttribute("src", (j+16)+".jpg");
            });
                break;
         default:
            aside.forEach((e,j) => {
                e.setAttribute("src", (j+36)+".jpg");
            });
              break;   
      }
  }
}
function web() {
    "use strict";
    colorli(2);
     aside0.forEach((e,j) => {
         e.setAttribute("src", (j+31)+".jpg");
});
     aside.forEach((element, i) => {
        element.setAttribute("src", (i+36)+".jpg");
    });
    changeColor(2);
}
function graphics() {
    "use strict";
    colorli(3);
     aside0.forEach((e,j) => {
        e.setAttribute("src", (j+11)+".jpg");
});
     aside.forEach((element, i) => {
        element.setAttribute("src", (i+16)+".jpg");
    });
    changeColor(3);  
}
function design() {
    "use strict";
    var j=0;
    colorli(4);
     aside0.forEach((e,j) => {
         e.setAttribute("src", (j+21)+".jpg");
});
     aside.forEach((element, i) => {
        element.setAttribute("src", (i+26)+".jpg");
    });
    changeColor(4);
}
function logo() {
    "use strict";
    colorli(5);
     aside0.forEach((e,j) => {
         e.setAttribute("src", (j+1)+".jpg");
});
     aside.forEach((element, i) => {
         element.setAttribute("src", (i+6)+".jpg");
    });
    changeColor(5);
}
var mydl=document.querySelector("dl");
var mydlImg=document.querySelector("dl img");
function zoom(a) {
    mydl.style.visibility="visible";
    mydlImg.src = document.getElementById("myimg"+a).src;
    document.documentElement.height="12em";
    document.documentElement.overflowY="hidden";
}
function img1() {
    zoom(1)
}function img2() {
    zoom(2);
}function img3() {
    zoom(3);
}function img4() {
    zoom(4);
}function img5() {
    zoom(5);
}function img6() {
    zoom(6);
}function img7() {
    zoom(7);
}function img8() {
    zoom(8);
}function img9() {
    zoom(9);
}function img10() {
    zoom(10);
}
function reset() {
    mydl.style.visibility="hidden";
}
// button of all 
