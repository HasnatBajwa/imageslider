var body = "";
var but = "";
var imageAddress = ["./slider images/1.jpg", "slider images/2.jpg", "slider images/3.jpg", "slider images/4.jpg"];
let counterF = 0;
let counterR = 3;
// __________ Function to implement different screen modes________
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
// ______________Ending Screen mode_________________
// ____________Function for Next Image_____________
function nextImage() {
  let getImage = document.getElementById("1");
  getImage.src = imageAddress[counterF];
  counterF++;
  if (counterF === counterR) {
    counterF=0;
    
  }
}
// ______Function For Previous Image_______
function previousImage() {
  let getImage = document.getElementById("1");
  getImage.src = imageAddress[counterR];
  counterR--;
  if (counterR === counterF) {
    counterR=3;
    
  }
}
// __________Ending Java Script__________