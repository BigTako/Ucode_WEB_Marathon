const imagePath = "./assets/images/image";
let counter = 2;

const buttons = document.getElementsByClassName("arrow-button");
const mainImage = document.getElementById("main_image");

function changeImage(period){
    if (counter > 4){
        counter = 1;
    }
    else if (counter < 1){
        counter = 4;
    }

    mainImage.setAttribute("src", imagePath + counter + ".jpg");
    counter+=period;
}

let ID = setInterval(function(){
    changeImage(1);
}, 3000);

buttons[0].addEventListener('click', function(){
    clearInterval(ID);
    changeImage(-1);
});

buttons[1].addEventListener('click', function(){
    clearInterval(ID);
    changeImage(1);
});



