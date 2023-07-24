let playerText = document.getElementById('playerText');
let button = document.getElementById('restart');
let boxes = Array.from(document.getElementsByClassName("box"));
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O", X_TEXT = "X";
let currentPlayer = X_TEXT;


let spaces = Array(9).fill(null);


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id;
    console.log(id)
    if(!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()) {
            playerText.innerText = `${currentPlayer} has won`;
            let wining_block = playerHasWon();

            wining_block.map(box => boxes[box].style.backgroundColor = winnerIndicator);
        }
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
    }
}

const winingCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (let condition of winingCombinations) {
        let [a, b, c] = condition;
        if(spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) return [a,b,c];
        
    }
    return false;
}

button.addEventListener('click', restart);

function restart ( ) {
    spaces.fill(null); 
    boxes.forEach(box => {
        box.innerText = ""
        box.style.backgroundColor = '';
    });

    playerText.innerText = "Tic Tac Toe";

    currentPlayer = X_TEXT
}

startGame()

