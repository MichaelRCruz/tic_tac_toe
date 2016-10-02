_one = document.getElementById('one');
_two = document.getElementById('two');
_three = document.getElementById('three');
_four = document.getElementById('four');
_five = document.getElementById('five');
_six = document.getElementById('six');
_seven = document.getElementById('seven');
_eight = document.getElementById('eight');
_nine = document.getElementById('nine');

var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var marker = "X";

var switcher = function() {
  if (marker == "X") {
    marker = "O";
  } else if (marker == "O") {
    marker = "X";
  }
};

var dude = function() {
// this function needs to determine a tie
};

var winLogic = function() {
  if (board[0] == board[1] && board[0] == board[2]) {
    switcher();
    alert(marker + " wins!");
  } else if (board[3] == board[4] && board[3] == board[5]) {
    switcher();
    alert(marker + " wins!")
  } else if (board[6] == board[7] && board[6] == board[8]) {
    switcher();
    alert(marker = " wins!");
  } else if (board[0] == board[4] && board[0] == board[8]) {
    switcher();
    alert(marker + " wins!");
  } else if (board[2] == board[4] && board[2] == board[6]) {
    switcher();
    alert(marker + " wins!");
  } else if (board[0] == board[3] && board[0] == board[6]) {
    switcher();
    alert(marker + " wins!");
  } else if (board[1] == board[4] && board[1] == board[7]) {
    switcher();
    alert(marker + " wins!");
  } else if (board[2] == board[5] && board[2] == board[8]) {
    switcher();
    alert(marker + " wins!");
  } else {
    dude();
  }
};

_one.addEventListener('click', function() {
  this.innerHTML =  marker;
  board[0] = marker;
  switcher();
  winLogic();
});
_two.addEventListener('click', function() {
  this.innerHTML = marker;
  board[1] = marker;
  switcher();
  winLogic();
});
_three.addEventListener('click', function() {
  this.innerHTML = marker;
  board[2] = marker;
  switcher();
  winLogic();
});
_four.addEventListener('click', function() {
  this.innerHTML = marker;
  board[3] = marker;
  switcher();
  winLogic();
});
_five.addEventListener('click', function() {
  this.innerHTML = marker;
  board[4] = marker;
  switcher();
  winLogic();
});
_six.addEventListener('click', function() {
  this.innerHTML = marker;
  board[5] = marker;
  switcher();
  winLogic();
});
_seven.addEventListener('click', function() {
  this.innerHTML = marker;
  board[6] = marker;
  switcher();
  winLogic();
});
_eight.addEventListener('click', function() {
  this.innerHTML = marker;
  board[7] = marker;
  switcher();
  winLogic();
});
_nine.addEventListener('click', function() {
  this.innerHTML = marker;
  board[8] = marker;
  switcher();
  winLogic();
});
