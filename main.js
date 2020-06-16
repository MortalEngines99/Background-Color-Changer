const body = document.getElementsByTagName("body")[0];
const gridChildren = document.querySelectorAll("#grid > div");
const changeBackgroundBtn = document.getElementById("changeBackground");
const rgbParagraph = document.getElementById("rgbParagraph");
let red,green,blue = 0;

//Add spacebar event listener on body element
body.addEventListener("keyup",(e) => {
    if(e.code === "Space"){
        changeBackgroundColor();
    }
});

//Add click event listener on h3 element
changeBackgroundBtn.addEventListener("click",() => changeBackgroundColor());

function getRandomNumber(){
    return Math.floor(Math.random() * Math.floor(256));
}

function changeBackgroundColor(){
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();

    let rgb = `rgb(${red},${green},${blue})`;

    rgbParagraph.innerText = rgb;

    //Create anime animation to transition background color
    anime({
        targets:gridChildren,
        backgroundColor:`${rgb}`,
        duration:500,
        delay: anime.stagger(50),
        easing:"easeInOutQuad",
      });
}
