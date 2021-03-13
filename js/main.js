const clearBtn = document.querySelector(".clear-board");
const shuffleBtn = document.querySelector(".shuffle-board");
const board = document.querySelector(".board");

const gameTiles = Object.values(board.childNodes).filter(tile => tile.nodeName !== "#text");


clearBtn.addEventListener("click", clearBoard);
shuffleBtn.addEventListener("click", shuffleBoard);
board.addEventListener("click", moveTile);


function clearBoard(){
    gameTiles.sort((a, b) => Number(a.innerHTML) - Number(b.innerHTML));
    gameTiles.forEach(tile => {
        tile.parentNode.removeChild(tile);
        board.appendChild(tile);
    });
}

function shuffleBoard(){
    let i = 16,
    randomTileIndex,
    randomTile;
    while(--i > 0){
        randomTileIndex = Math.floor(Math.random() * (i + 1));
        randomTile = gameTiles[randomTileIndex];
        gameTiles[randomTileIndex] = gameTiles[i];
        gameTiles[i] = randomTile;
    }
    gameTiles.forEach(tile => {
        tile.parentNode.removeChild(tile);
        board.appendChild(tile);
    });
    
}

function moveTile(e){
    // console.log(e.target.classList.contains("tile"));
    if(e.target.classList.contains("tile")){
        let targetIdx = gameTiles.indexOf(e.target)
        let moved = false;
        if(targetIdx % 4 !== 3 && gameTiles[targetIdx + 1].classList.contains("empty")){
            [gameTiles[targetIdx], gameTiles[targetIdx + 1]] = [gameTiles[targetIdx + 1], gameTiles[targetIdx]];
            moved = true;
        }else if(targetIdx % 4 !== 0 && gameTiles[targetIdx - 1].classList.contains("empty")){
            [gameTiles[targetIdx], gameTiles[targetIdx - 1]] = [gameTiles[targetIdx - 1], gameTiles[targetIdx]];
            moved = true;
        }else if(gameTiles[targetIdx - 4] && gameTiles[targetIdx - 4].classList.contains("empty")){
            [gameTiles[targetIdx], gameTiles[targetIdx - 4]] = [gameTiles[targetIdx - 4], gameTiles[targetIdx]];
            moved = true;
        }else if(gameTiles[targetIdx + 4] && gameTiles[targetIdx + 4].classList.contains("empty")){
            [gameTiles[targetIdx], gameTiles[targetIdx + 4]] = [gameTiles[targetIdx + 4], gameTiles[targetIdx]];
            moved = true;
        }

        if(moved){
            console.log("moved");
            gameTiles.forEach(tile => {
                tile.parentNode.removeChild(tile);
                board.appendChild(tile);
            });
        }
    }
}
