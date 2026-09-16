const board = document.querySelector(".board");


const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector (".start-game")
const gameOverModal = document.querySelector ('.game-over')
const restartButton = document.querySelector ('.btn-restart')
const highScoreElement = document.querySelector("#high-score")
const scoreElement = document.querySelector ("#score")
const timeElement = document.querySelector("#time")

// Size of each grid block
const blockHeight = 45;
const blockWidth = 45;


let highScore = Number(localStorage.getItem("highscore")) || 0;
let score = 0;
let time = `00-00`


 highScoreElement.innerHTML = highScore;



// Calculate how many columns and rows fit on the board
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalid =null;
let timerIntervalId = null


let food =
   {x:Math.floor(Math.random()*rows),
    y:Math.floor(Math.random()*cols)}

// Store references to every block
const blocks = [];

// Snake body positions using row(x) and column(y)
let snake = [
    { x: 4, y: 13 },
    { x: 4, y: 14 },
    { x: 4, y: 15 }
];

// let direction = "up";

// Create all grid blocks and store them using their coordinates
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);

        // Give each block a unique coordinate
        // block.innerText = `${row}-${col}`;

        // Store the actual div using its coordinate
        blocks[`${row}-${col}`] = block;
    }
}

function render() {

    // Calculate the new head position
    let head = null;

    // Show food
    blocks[`${food.x}-${food.y}`]
        .classList.add("food");

    if (direction == "left") {
        head = {
            x: snake[0].x,
            y: snake[0].y - 1
        };
    }

    else if (direction == "right") {
        head = {
            x: snake[0].x,
            y: snake[0].y + 1
        };
    }

    else if (direction == "down") {
        head = {
            x: snake[0].x + 1,
            y: snake[0].y
        };
    }

    else if (direction == "up") {
        head = {
            x: snake[0].x - 1,
            y: snake[0].y
        };
    }

    // Check boundary
    if (
        head.x < 0 ||head.x >= rows ||head.y < 0 || head.y >= cols
    ) {
        clearInterval(intervalId);
        modal.style.display = "flex";
        startGameModal.style.display = "none";
        gameOverModal.style.display = "flex";

        return;
    }

    // Check if food is eaten
    // food consume logic

   let ateFood = false;

if (head.x == food.x && head.y == food.y) {

    ateFood = true;

    blocks[`${food.x}-${food.y}`]
        .classList.remove("food");

    score += 10;
    scoreElement.innerHTML = score;

    if (score > highScore){
        highScore=score
        localStorage.setItem("highscore", highScore.toString())
    }

    // Generate new food
    food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols)
    };
}

// Remove old snake appearance
snake.forEach(segment => {
    blocks[`${segment.x}-${segment.y}`]
        .classList.remove("fill");
});

// Add new head
snake.unshift(head);

// Remove tail ONLY if food was NOT eaten
if (!ateFood) {
    snake.pop();
}

    // Show updated snake
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`]
            .classList.add("fill");
    });


}



startButton.addEventListener('click', ()=>{

    modal.style.display = "none"

    intervalId = setInterval(() => {
    // Show the updated snake
    render()

    }, 200);

    timerIntervalId = setInterval(()=>{
        let [min,sec] = time.split("-").map(Number)

        if (sec == 59){
            min+= 1;
            sec = 0
        }else{
            sec += 1
        }

        time = `${min}-${sec}`
        timeElement.innerText = time
    },1000)
})

restartButton.addEventListener("click", restartGame)

function restartGame(){

    document.querySelectorAll(".fill").forEach(block => {
    block.classList.remove("fill");
    });

    // Remove old food
    document.querySelectorAll(".food").forEach(block => {
    block.classList.remove("food");
    });


    let highScore = Number(localStorage.getItem("highscore")) || 0;
    let score = 0;
    let time = `00-00`;

    highScoreElement.innerHTML = highScore;
    scoreElement.innerHTML = score;
    timeElement.innerHTML = time


    clearInterval(intervalId);


    modal.style.display = "none";
    snake = [{ x: 4, y: 13 },
             { x: 4, y: 14 },
             { x: 4, y: 15 }
    ];

    direction =  "left"
    food ={x:Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}

    intervalId = setInterval(() => {


    // Show the updated snake
    render();

}, 200);


}



addEventListener('keydown',(event)=>{  // "keydown" Detects which keyboard key is pressed

    if(event.key == "ArrowUp"){
        direction = "up";
    }
    else if(event.key == "ArrowDown"){
        direction = "down";
    }        
    else if(event.key == "ArrowLeft"){
        direction = "left";
    }
    else if(event.key == "ArrowRight"){
        direction = "right";
    }

})



// Show the initial snake
render();
