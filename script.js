one = document.getElementById('one');
two = document.getElementById('two');
three = document.getElementById('three');
four = document.getElementById('four');
five = document.getElementById('five');
six = document.getElementById('six');
seven = document.getElementById('seven');
eight = document.getElementById('eight');
nine = document.getElementById('nine');
_button = document.getElementById('clear')

var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var things = [one, two, three, four, five, six, seven, eight, nine];
var marker = "X";


_button.addEventListener('click', function() {
for (var i = 0; i < things.length; i++) {
  things[i].innerHTML = "";
}
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


// for (var i = 0; i < things.length; i++) {
//   things[i].addEventListener('click', function() {
//     if (this.innHTML == "X" || this.innerHTML == "O") {
//       alert("This cell cannot be played again.")
//     } else {
//       this.innerHTML =  marker;
//       board[i] = marker;
//       switcher();
//       winLogic();
//     }
//   });
// }

one.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[0] = marker;
    switcher();
    winLogic();
  }
});
two.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[1] = marker;
    switcher();
    winLogic();
  }
});
three.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[2] = marker;
    switcher();
    winLogic();
  }
});
four.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[3] = marker;
    switcher();
    winLogic();
  }
});
five.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[4] = marker;
    switcher();
    winLogic();
  }
});
six.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[5] = marker;
    switcher();
    winLogic();
  }
});
seven.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[6] = marker;
    switcher();
    winLogic();
  }
});
eight.addEventListener('click', function() {
  if (this.innHTML === "X" || this.innerHTML === "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[7] = marker;
    switcher();
    winLogic();
  }
});
nine.addEventListener('click', function() {
  if (this.innHTML == "X" || this.innerHTML == "O") {
    alert("This cell cannot be played again.")
  } else {
    this.innerHTML =  marker;
    board[8] = marker;
    switcher();
    winLogic();
  }
});
