const gameWindow = document.getElementById("mainContent");
const topBarrier = document.getElementById("topBarrier");
const bottomBarrier = document.getElementById("bottomBarrier");
const player = document.getElementById("player");
const stopBtn = document.getElementById("stopBtn");
const animatedBarriers = document.getElementsByClassName("animation");

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
function keyUpHandler(event) {
    if (event.key === "ArrowDown") {
        console.log("stopped pressing down key");
        downPressed = true;
    }
    else if (event.key === "ArrowUp") {
        console.log("stopped pressing up key");
        upPressed = true;
    }
}
function keyDownHandler(event) {
    if (event.key === "ArrowDown") {
        console.log("down pressed");
        downPressed = false;
    }
    else if (event.key === "ArrowUp") {
        console.log("up pressed");
        upPressed = false;
    }
}

let pTop;
function moveUp() {
    console.log("player goes up");
    pTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"), 10)
    console.log("ptop is: " + pTop)
    player.style.top = (pTop - 5) + "px";
    player.style.display = "none";
    player.style.display = "block";

}

function moveDown() {
    console.log("player goes down");
    pTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"), 10)
    console.log("ptop is: " + pTop)
    player.style.top = (pTop + 5) + "px";
    player.style.display = "none";
    player.style.display = "block";
}


function startOver() {
    topBarrier.classList.add("animation");
    bottomBarrier.classList.add("animation");
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

    let upInterval;
    let downInterval;
    if (upPressed == true) {
        upInterval = setInterval(moveUp, 10)
    }
    if (downPressed == true) {
        downInterval = setInterval(moveDown, 10)
    }
    if (upPressed == false) {
        clearInterval(moveUp);
    }
    if (downPressed == false) {
        clearInterval(moveDown);
    }


    // if(){
    //     alert("Game over. Score: "+(counter-1));
    //     character.style.top = 100 + "px";
    //     counter=0;
    // }
}


function stopGame() {
   // clearInterval(myInterval);
    topBarrier.classList.remove("animation");
    bottomBarrier.classList.remove("animation");
    console.log("stop button clicked");
}