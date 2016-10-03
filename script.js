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

var isTie = function() {
  if (board[0] !== 1 && board[1] !== 2 && board[2] !== 3 && board[3] !== 4 && board[4] !== 5 && board[5] !== 6 && board[6] !== 7 && board[7] !== 8 && board[8] !== 9) {
    alert("It's a tie!")
  } else {
    return null;
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

var dude = function(i) {
  things[i].addEventListener('click', function() {
    if (this.innerHTML == "X" || this.innerHTML == "O") {
      alert("This cell cannot be played again.")
    } else {
      this.innerHTML = marker;
      board[i] = marker;
      switcher();
      winLogic();
    }
  });
}

for (var i = 0; i < things.length; i++) {
  dude(i);
}
