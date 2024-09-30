document.addEventListener("DOMContentLoaded", function () {
var colorBox=document.getElementById("color-box")
var  colorBoxbutton=document.getElementById("change-color-btn")



function getRandomColor(){
    let r = Math.floor(Math.random() *255);
    let g = Math.floor(Math.random() *255);
    let b = Math.floor(Math.random() *255);

var color="rgb("+r+","+g+","+b+")"
return color
}


colorBoxbutton.addEventListener("click", function () {
  colorBox.style.backgroundColor= getRandomColor();
})




})







