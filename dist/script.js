let myButton = "You Won! !";
myButtonStatus = true;
document.getElementById("btn").addEventListener("click", changeElement);

function changeElement() {
let myHeading = "The Game status changed ";
document.getElementById("demo").innerHTML = myButton;

if (myButtonStatus = true) {
document.getElementById("demo2").textContent = myHeading;
}
 
}