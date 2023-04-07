// put JavaScript here...
let main_box = document.querySelector("#main_box");
main_box.style.backgroundColor = "#e6f6fc";
let display_image = document.querySelector(".umbrella_src")
display_image.src = "../images/Blue umbrella.png"
let buton = document.querySelector(".upload_logo");
buton.style.backgroundColor = "#34b5e5"

let img = document.querySelector(".logo_here");

let blue = document.querySelector(".blue_color").addEventListener("click", changeToBlue);
let pink = document.querySelector(".pink_color").addEventListener("click", changeToPink);
let yellow = document.querySelector(".yellow_color").addEventListener("click", changeToYellow);