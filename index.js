const gameWindow = document.getElementById("mainContent");
const topBarrier = document.getElementById("topBarrier");
const bottomBarrier = document.getElementById("bottomBarrier");
const player = document.getElementById("player");

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
function keyDownHandler(event) {
    if (event.key === "ArrowRight") { rightPressed = true; }
    else if (event.key === "ArrowLeft") { leftPressed = true; }
    else if (event.key === "ArrowDown") { 
        console.log("down pressed");
        downPressed = true; 
    }
    else if (event.key === "ArrowUp") { 
        console.log("up pressed");
        upPressed = true; 
    }
}
function keyUpHandler(event) {
    if (event.key === "ArrowRight") { rightPressed = false; }
    else if (event.key === "ArrowLeft") { leftPressed = false; }
    else if (event.key === "ArrowDown") { downPressed = false; }
    else if (event.key === "ArrowUp") { upPressed = false; }
}


function startOver() {
    let topHeight;
    let bottomHeight;
    topBarrier.addEventListener("animationiteration", () => {
        topHeight = Math.trunc(Math.random() * 300) + 25;
        topBarrier.style.height = topHeight + "px";
    })
    bottomBarrier.addEventListener("animationiteration", () => {
        bottomHeight = (gameWindow.getBoundingClientRect().height) - (topHeight + 60);
        bottomBarrier.style.height = bottomHeight + "px";
        bottomBarrier.style.top = "60px";
    })


    if (upPressed = true) {
        player.style.top = (parseInt(player.style.top, 10) - 5) + "px";
        console.log("player goes up");
    }
    else if (downPressed = true) {
        player.style.top = (parseInt(player.style.top, 10) + 5) + "px";
        console.log("player goes down");

    }


    // if(){
    //     alert("Game over. Score: "+(counter-1));
    //     character.style.top = 100 + "px";
    //     counter=0;
    // }
}


let myInterval;
function clickStart() {
    myInterval = setInterval(startOver(), 10)
}
function clickStop() {
    clearInterval(myInterval);
}