

var text = document.getElementById("text");
   
var green = document.querySelector(".green");

var red = document.querySelector(".red");

var blue = document.querySelector(".blue");

    
    green.addEventListener("mouseover", function()  {
     document.getElementById("text").style.color = "green";
     })

     red.addEventListener("mouseover", function () {
     text.style.color = "red";
    })

    blue.addEventListener("mouseover", function() {
        text.style.color = "blue";
     })
    
    
    


