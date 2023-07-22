var board = ["", "", "", "", "", "", "", "", ""];
var turn = true; // true means X's turn, false means O's turn
var gameOver = false;

function makeMove(cell) {
  if (gameOver || cell.innerHTML != "") {
    return; // do nothing if the game is over or the cell is occupied
  }
  
  var index = parseInt(cell.id.substring(5)); // get the index of the cell from its id
  board[index] = turn ? "X" : "O"; // update the board array with X or O
  cell.innerHTML = turn ? "X" : "O"; // update the cell innerHTML with X or O
  checkWin(); // check if there is a winner or a tie
}

function checkWin() {
  var lines = [ // all possible winning lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (var i = 0; i < lines.length; i++) { // loop through all lines
    var a = lines[i][0]; // first cell of the line
    var b = lines[i][1]; // second cell of the line
    var c = lines[i][2]; // third cell of the line
    
    if (board[a] != "" && board[a] == board[b] && board[b] == board[c]) { // if all three cells are equal and not empty
      gameOver = true; // set gameOver to true
      document.getElementById("status").innerHTML = board[a] + " wins!"; // update the status message with the winner
      return; // exit the function
    }
    
    if (board.indexOf("") == -1) { // if there are no empty cells left
      gameOver = true; // set gameOver to true
      document.getElementById("status").innerHTML = "It's a tie!"; // update the status message with a tie
      return; // exit the function
    }
  }
  
  turn = !turn; // switch the turn
  document.getElementById("status").innerHTML = turn ? "X's turn" : "O's turn"; // update the status message with the current player's turn
}
