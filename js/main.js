const board = document.querySelector(".board");

board.addEventListener("click", moveTile);

function moveTile(e){
    console.log(e.target.classList.contains("tile"));
}