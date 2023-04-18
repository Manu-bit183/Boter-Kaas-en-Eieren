let board = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let gameover = false;

function play(square, index) {
  if (board[index] === '' && !gameover) {
    square.innerHTML = player;
    board[index] = player;
    if (checkWin()) {
      alert(player + ' wint!');
      gameover = true;
    } else if (checkDraw()) {
      alert('Gelijkspel!');
      gameover = true;
    } else {
      player = player === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !board.includes('');
}
function startGame() {
  document.querySelector(".endgame").style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
  }
}
