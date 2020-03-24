const word = document.getElementById("word")
const text = document.getElementById("text")
const scoreEL = document.getElementById("score")
const timeEl = document.getElementById("time")
const endgameEL = document.getElementById("end-game")
const setingsfrom = document.getElementById("setings-form")
const difficultySelect = document.getElementById("difficulty")

const words=[
    "apple",
    "home",
    "difficult",
    "earth",
    "element",
    "transparent",
    "inclusion",
    "cat",
    "parrot",
    "coding",
    "robot",
   "programm"
]

let randomWord
let score = 0
let time = 10

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem("difficulty") : "medium";

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem("difficulty") : "medium"

text.focus()

const timeInterval = setInterval(updateTime,999)

function updateTime(){
    time--
    timeEl.innerHTML= time + "s"
    if(time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}
function gameOver(){
    endgameEL.innerHTML = `
    <h1>Time Left</h1>
    <p> Your Score ${score}</p>
    <button onclick="location.reload()">Reload</button>`
}

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]
}

function addWordDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord
}
addWordDOM()
function updateScore(){
    score ++ 
    scoreEL.innerHTML = score;
}
text.addEventListener('input', e=>{
    const insertedText = e.target.value
if(insertedText === randomWord){
    addWordDOM()
    updateScore()
    e.target.value = "";
    if (difficulty === "hard") {
        time += 2
    }else
    if (difficulty === "middle") {
        time += 3
    }else{
       
            time += 5
        }
            updateTime()

     }
});
setingsfrom.addEventListener("change",e => {
    difficulty = e.target.value
    console.log(difficulty)
    localStorage.setItem('difficulty' , difficulty)
})