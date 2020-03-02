var colors = generateRandomColors(numberOfSqaures);
var numberOfSqaures = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var pickedColor = pickColor()
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBTN = document.querySelector("#easyBTN")
var hardBTN = document.querySelector("#hardBTN")




easyBTN.addEventListener("click", function(){
   easyBTN.classList.add("selected")
   hardBTN.classList.remove("selected")
   numberOfSqaures = 3;
   colors = generateRandomColors(numberOfSqaures);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
           squares[i].style.backgroundColor = colors[i];
       }else{
           squares[i].style.display="none";
       }
   }
})

hardBTN.addEventListener("click", function(){
    easyBTN.classList.remove("selected")
   hardBTN.classList.add("selected")
   numberOfSqaures = 5;
   colors = generateRandomColors(numberOfSqaures);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display= "block";
       
   }
})

resetButton.addEventListener("click", function(){
    //genrate all new colors
    colors = generateRandomColors(numberOfSqaures);
    // pick new random color from array
    pickedColor = pickColor()
    // change color display to mathc picked color
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1. style.background = "steelBlue"
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){        
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
        message.textContent = "Correct"
        changeColor(clickedColor)
        h1.style.background = clickedColor;
        resetButton.textContent = "Play Again?"
    }else{
        this.style.background = "#232323"
        message.textContent = "Try again"
    }
    })
}

function changeColor(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push to array
        arr.push(randomColor())
    }
    //return that array
    return(arr);
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return("rgb(" + r +", " + g + ", " + b + ")")
}   
