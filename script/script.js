var body = "";
var but = "";
var getImage = "";
var imageId = ["1", "2", "3", "4", "5"];

function darkMode() {
but = document.getElementById("darkMode");

  if (but.innerHTML == "Dark Mode"){
    body = document.getElementById("b");
    
    body.className = "darkMode"
    but.innerHTML = "Light Mode";
    but.style.backgroundColor = "white"
    but.style.color = "black"

  }
  else if(but.innerHTML == "Light Mode"){
    body = document.getElementById("b");
    body.className = "lightMode"
    but.innerHTML = "Dark Mode";
    but.style.backgroundColor = "black"
    but.style.color = "white"

  }
}
function nextImage() {
   for(index = 1; index<=imageId.length; index++ ){
       switch (imageId) {
           case "1":
               
               
               break;
       
           default:
               break;
       }

   }
}
