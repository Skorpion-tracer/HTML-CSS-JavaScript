var zero, one, two, three, four,
    five, six, seven, eight, nine;
var buttons = [];
buttons.push(zero, one, two, three, four,
             five, six, seven, eight, nine);

var action = 0;
var num1;
var num2;

window.onload = function() {
  var click = false;
  var display = document.getElementById("display");
  var ce = document.getElementById("ce");
  var plus = document.getElementById("plus");
  var result = document.getElementById("result");
  var minus = document.getElementById("minus");
  var multiply = document.getElementById("multiply");
  var split = document.getElementById("split");

  for (var i = 9; i >= 0; i--) {
    buttons[i] = document.getElementById("0" + i);
    buttons[i].onclick = function(e) {
      var target = e.target;
      if (display.innerHTML.length < 22) {
        if (!click) {
          if (target.innerHTML === "0" && display.innerHTML.length === 1) {
            display.innerHTML = "0";
            return;
          }
          display.innerHTML = "" + target.innerHTML;
          click = true;
        } else {
          display.innerHTML += target.innerHTML;
        }
      } else { return; }
    }
  }

  plus.onclick = function() {
    action = 1;
    num1 = parseInt(display.innerHTML);
    console.log(num1);
    display.innerHTML = "0";
    click = false;
  }

  minus.onclick = function() {
    action = 2;
    num1 = parseInt(display.innerHTML);
    console.log(num1);
    display.innerHTML = "0";
    click = false;
  }

  multiply.onclick = function() {
    action = 3;
    num1 = parseInt(display.innerHTML);
    console.log(num1);
    display.innerHTML = "0";
    click = false;
  }

  split.onclick = function() {
    action = 4;
    num1 = parseInt(display.innerHTML);
    console.log(num1);
    display.innerHTML = "0";
    click = false;
  }

  result.onclick = function() {
    num2 = parseInt(display.innerHTML);
    if (action === 1) {
      result = num1 + num2;
    } else if (action === 2) {
      result = num1 - num2;
    } else if (action === 3) {
      result = num1 * num2;
    } else if (action === 4) {
      result = num1 / num2;
    }

    display.innerHTML = String(result);
    console.log("результат " + result);
    click = false;
  }

  ce.onclick = function() {
    action = 0;
    num1 = 0;
    num2 = 0;
    display.innerHTML = "0";
    click = false;
  }
}