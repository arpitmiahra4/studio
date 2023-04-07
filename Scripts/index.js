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

function changeToBlue() {
    display_image.src = "../images/Blue umbrella.png"
    main_box.style.backgroundColor = "#e5f5fe"
    buton.style.backgroundColor = "#34b5e5"
    img.src = "../images/logo.png"
}
function changeToPink() {
    display_image.src = "../images/Pink umbrella.png";
    main_box.style.backgroundColor = "#F9EBF9"
    buton.style.backgroundColor = "#d9378d"
    img.src = "../images/logo.png"
}
function changeToYellow() {
    display_image.src = "../images/Yello umbrella.png"
    main_box.style.backgroundColor = "#fffaed"
    buton.style.backgroundColor = "#fccf41"
    img.src = "../images/logo.png"
}