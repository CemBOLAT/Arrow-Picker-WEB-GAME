const entrencePage = document.querySelector("#entrence-page")
const gamePage = document.querySelector("#game-page")
const restartPage = document.querySelector("#restart-page")
let currentPage = "entrence"
const upBtn = document.querySelector("#up-btn")
const rightBtn = document.querySelector("#right-btn")
const leftBtn = document.querySelector("#left-btn")
const backBtn = document.querySelector("#back-btn")
const btns = document.querySelectorAll(".btn")
const infoBox = document.querySelector("#informationBox")
const highScoreEnterencePage = document.querySelector("#high-score-entrence")
const highScoreGamePage = document.querySelector("#high-score-game")
let background = 0
let totalScore = 0
let highScore = 0
let randomNumber
let correctParameter = true
loop()

function loop(){
    document.addEventListener("keyup",(e)=>{
        if(
            currentPage == "entrence" &&
            e.code == "Space"
        ){
            enterTheGame(e)
            return
        }
        if(
            currentPage == "game" &&
            e.code == "Enter" &&
            infoBox.textContent == "ENTER"
        ){
            infoBox.textContent = "0"
            arrowPicker(e) 
        }
        if(
            e.code == "ArrowUp" ||
            e.code == "ArrowLeft" ||
            e.code == "ArrowRight" ||
            e.code == "ArrowDown" 
        ){
            if(
                (infoBox.textContent != "ENTER")
            ){
                checker(e)
                userSelection(e)
                if(correctParameter == false){
                    setTimeout(gameFinished,1000)
                    setTimeout(restartGame,1100)
                }
                else{
                    arrowPicker(e)
                }
            }
        }
    })
}
function enterTheGame(e){
    currentPage = "game"
    entrencePage.style.opacity = "0"
    gamePage.style.opacity = "1"
} 
function arrowPicker(e){
    randomNumber = Math.floor(Math.random() * 4)
    while(randomNumber == background){
        randomNumber = Math.floor(Math.random() * 4)
    }
    background = randomNumber
    arrowCleaner(btns)
    btns[background].classList.add("selected-system")
}
function arrowCleaner(btns){
    btns.forEach((btn)=>{
        btn.classList.remove("selected-system")
        btn.classList.remove("selected-person")
    })
}
function checker(e){
    switch(background){
        case 0:
            if(e.code == "ArrowUp"){
                totalScore += 1
                infoBox.textContent = totalScore
            }
        break;
        case 1:
            if(e.code == "ArrowLeft"){
                totalScore += 1
                infoBox.textContent = totalScore
            }
        break;
        case 2:
            if(e.code == "ArrowRight"){
                totalScore += 1
                infoBox.textContent = totalScore
            }
        break;
        case 3:
            if(e.code == "ArrowDown"){
                totalScore += 1
                infoBox.textContent = totalScore
            }
        break;
    }
    if(
        (background == 0 && e.code == "ArrowUp") ||
        (background == 1 && e.code == "ArrowLeft") ||
        (background == 2 && e.code == "ArrowRight") ||
        (background == 3 && e.code == "ArrowDown")
    ){
        correctParameter = true
    }
    else{
        correctParameter = false
    }
}
function gameFinished(){
    highScoreChecker()
    gamePageToEnterence()
    arrowCleaner(btns)
}
function highScoreChecker(){
    if(highScore < totalScore){
        highScoreEnterencePage.textContent = totalScore
        highScoreGamePage.textContent = totalScore
        highScore = totalScore
    } 
}
function gamePageToEnterence(){
    currentPage = "entrence"
    gamePage.style.opacity = "0"
    entrencePage.style.opacity = "1"
    infoBox.textContent = "ENTER"
    scoreCleaner()
}
function scoreCleaner(){
    totalScore = 0
}
function arrowCleaner(btns){
    btns.forEach((btn)=>{
        btn.classList.remove("selected-system")
        btn.classList.remove("selected-person")
    })
}
function restartGame(){
    document.addEventListener("keyup",(e)=>{
        if(e.code == "Space"){
            enterTheGame(e)
        }
    })
}
function userSelection(e){
    if(e.code == "ArrowUp"){
        btns[0].classList.add("selected-person")
    }
    else if(e.code == "ArrowLeft"){
        btns[1].classList.add("selected-person")
    }
    else if(e.code == "ArrowRight"){
        btns[2].classList.add("selected-person")
    }
    else if(e.code == "ArrowDown"){
        btns[3].classList.add("selected-person")
    }
}