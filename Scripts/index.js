// put JavaScript here...
let changeObj = {
    blue_color: {
        umbrellaSrc: "../images/Blue umbrella.png",
        mainBoxBgColor: "#e5f5fe",
        btnBgColor: "#34b5e5",
        imgSrc: ""
    },
    pink_color: {
        umbrellaSrc: "../images/Pink umbrella.png",
        mainBoxBgColor: "#F9EBF9",
        btnBgColor: "#d9378d",
        imgSrc: ""
    },
    yellow_color: {
        umbrellaSrc: "../images/Yello umbrella.png",
        mainBoxBgColor: "#fffaed",
        btnBgColor: "#fccf41",
        imgSrc: ""
    },
}
let img = document.querySelector(".logo_here");
let blue = document.querySelector(".blue_color")
let pink = document.querySelector(".pink_color")
let yellow = document.querySelector(".yellow_color")
let main_box = document.querySelector("#main_box");
main_box.style.backgroundColor = "#e6f6fc";

let button_div = document.querySelector(".color_selector").addEventListener("click", colorChangerFunction)
function colorChangerFunction(e) {
    console.log(e.target.className);
    let color = e.target.className;
    themeChanger(changeObj[color])
}
let display_image = document.querySelector(".umbrella_src")
display_image.src = "../images/Blue umbrella.png"
let buton = document.querySelector(".upload_logo");
let logoImage = undefined;
let logoIsUploading = false;
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = () => {
            reject(fileReader.error);
        };
    });
};
buton.addEventListener("change", (e) => {
    let file = e.target.files[0];
    logoIsUploading = true;
    display_image.style.display = "none";
    img.setAttribute("src", "../images/loader_icon.svg");
    img.setAttribute('class', 'loader_image');
    setTimeout(async () => {
        try {
            let base64File = await convertBase64(file);
            logoImage = base64File.toString();
            logoIsUploading = false;
            if (!logoIsUploading && logoImage) {
                display_image.style.display = "block"
                img.setAttribute("src", logoImage);
                
                img.setAttribute('class', '');
            }
        } catch (err) {
            alert(err.message);
        }
    }, 2000);
})


function themeChanger(payload) {
    const { umbrellaSrc, mainBoxBgColor, btnBgColor, imgSrc } = payload;
    logoIsUploading = true;
    display_image.style.display = "none";
    img.setAttribute("src", "../images/loader_icon.svg");
    img.setAttribute('class', 'loader_image');
    setTimeout(() => {
        display_image.src = umbrellaSrc
        main_box.style.backgroundColor = mainBoxBgColor
        buton.style.backgroundColor = btnBgColor
        img.src = imgSrc

        logoIsUploading = false;
        display_image.style.display = "block"
        if (!logoIsUploading && logoImage) {
            img.setAttribute("src", logoImage);
            img.setAttribute('class', '');
        }
    }, 3000)
}