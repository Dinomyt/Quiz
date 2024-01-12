let changeBackground = document.getElementById("changeBackground");
let changeTitle = document.getElementById("changeTitle");
let changeHeader = document.getElementById("changeHeader");
let changeHeaderTxtCol = document.getElementById("changeHeaderTxtCol");
let randomNum = document.getElementById("randomNum");
let randomNumCol = document.getElementById("randomNumCol");
let loadImage = document.getElementById("loadImage");
let hideImage = document.getElementById("hideImage");
let createTxtBox = document.getElementById("createTxtBox");
let changeBackgroundWhite = document.getElementById("changeBackgroundWhite");

changeBackground.addEventListener("click", function(){
    document.body.style.backgroundColor = "grey";
});

changeTitle.addEventListener("click", function(){
    let titleTxt = document.getElementById("titleTxt");
    titleTxt.innerText = "Title Changed";
});

changeHeader.addEventListener("click", function(){
    let headerTxt = document.getElementById("headerTxt");
    headerTxt.innerText = "Header Changed";
});

changeHeaderTxtCol.addEventListener("click", function(){
    let header = document.getElementById("header");
    headerTxt.style.color = "red";
});

randomNum.addEventListener("click", function(){
    let num = Math.floor(Math.random() * 100) + 1;
    headerTxt.innerText = num;
});

randomNumCol.addEventListener("click", function(){
    headerTxt.style.color = "blue";
});

let loadedImage; 

loadImage.addEventListener("click", function(){
    loadedImage  = document.createElement("img");
    loadedImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/American_Eskimo_Dog.jpg/1024px-American_Eskimo_Dog.jpg";
    document.body.insertBefore(loadedImage, document.body.firstChild);

});

hideImage.addEventListener("click", function(){
    loadedImage.src = "";
});

createTxtBox.addEventListener("click", function(){
    let textBox = document.createElement("input");
    textBox.type = "text";
    document.body.appendChild(textBox);
});

changeBackgroundWhite.addEventListener("click", function(){
    document.body.style.backgroundColor = "white";
});
