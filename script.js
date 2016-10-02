_one = document.getElementById('one');
_two = document.getElementById('two');
_three = document.getElementById('three');
_four = document.getElementById('four');
_five = document.getElementById('five');
_six = document.getElementById('six');
_seven = document.getElementById('seven');
_eight = document.getElementById('eight');
_nine = document.getElementById('nine');
_button = document.getElementById('clear')

var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var marker = "X";

_button.addEventListener('click', function() {
  _one.innerHTML = "";
  _two.innerHTML = "";
  _three.innerHTML = "";
  _four.innerHTML = "";
  _five.innerHTML = "";
  _six.innerHTML = "";
  _seven.innerHTML = "";
  _eight.innerHTML = "";
  _nine.innerHTML = "";
  board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
});

var switcher = function() {
  if (marker == "X") {
    marker = "O";
  } else if (marker == "O") {
    marker = "X";
  }
};

// Need to alert user in the event of a tie.
var isTie = function() {
  function checkForTie(check) {
      return check !== NaN;
  }
  if (board.some(checkForTie)) {
    null
  } else {
    alert("It's a tie!");
  }
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
    isTie();
  }
};

_one.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[0] = marker;
    switcher();
    winLogic();
  }
});
_two.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[1] = marker;
    switcher();
    winLogic();
  }
});
_three.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[2] = marker;
    switcher();
    winLogic();
  }
});
_four.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[3] = marker;
    switcher();
    winLogic();
  }
});
_five.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[4] = marker;
    switcher();
    winLogic();
  }
});
_six.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[5] = marker;
    switcher();
    winLogic();
  }
});
_seven.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[6] = marker;
    switcher();
    winLogic();
  }
});
_eight.addEventListener('click', function() {
  if (this.innHTML === "X" || this.innerHTML === "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[7] = marker;
    switcher();
    winLogic();
  }
});
_nine.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[8] = marker;
    switcher();
    winLogic();
  }
});

console.log(typeof board[0])
