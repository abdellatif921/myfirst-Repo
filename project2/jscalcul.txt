function calcul() {
    "use strict";
   var input1 = document.getElementById("inpu1"),
       input2 = document.getElementById("inpu2"),
       myDiv = document.getElementById("end"),
       myDiv1 = document.getElementById("end1"),
       myDiv2 = document.getElementById("end2"),
       border = document.getElementById("sec1"),
       lista = document.getElementById("list").value,
       number = (input1.value*lista)/input2.value;
     if(input1.value === "" || lista == 0 || input2.value=== "") {
        alert("please enter all values");
    }else if(input2.value == 1) {
        myDiv.innerHTML = "Tip Amount ";
        myDiv1.innerHTML = "<sup>$</sup> " + number.toFixed(2); 
        myDiv2.innerHTML = "";
        border.style.paddingBottom ="1px";   
    }else{
     myDiv.innerHTML = "Tip Amount ";
     myDiv1.innerHTML = "<sup>$</sup> " + number.toFixed(2);
     myDiv2.innerHTML = "each";
     border.style.paddingBottom ="1px";
    }
}