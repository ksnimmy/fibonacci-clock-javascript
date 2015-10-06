function onKeyDown(event) {   
  event.preventDefault();
}
function generateTime() {
  var hour = document.getElementById("hourInput").value;
  var minute = document.getElementById("minuteInput").value;
  var hourArr = getFibonacciArray(hour);
  var minuteArr = getFibonacciArray(minute / 5);
  var red = [];
  var blue = [];
  var green = [];
  var white = [];
  var tds = document.getElementsByTagName("td");
  for (var j = 0; j < tds.length; j++) {
    tds[j].style.removeProperty("background-color");
  }
  var fibonacciSeries = [1, 1, 2, 3, 5];
  for (var i = 0; i < fibonacciSeries.length; i++) {
    var val = fibonacciSeries[i];
    if (hourArr.indexOf(val) > -1 && minuteArr.indexOf(val) > -1) {
      blue.push(val);
      hourArr.splice(hourArr.indexOf(val), 1);
      minuteArr.splice(minuteArr.indexOf(val), 1);
      applyColor(val, "blue");
    } else if (hourArr.indexOf(val) > -1 && minuteArr.indexOf(val) == -1) {
      red.push(val);
      hourArr.splice(hourArr.indexOf(val), 1);
      applyColor(val, "red");
    } else if (hourArr.indexOf(val) == -1 && minuteArr.indexOf(val) > -1) {
      green.push(val);
      minuteArr.splice(minuteArr.indexOf(val), 1);
      applyColor(val, "green");
    } else {
      white.push(val);
      applyColor(val, "white");
    }
  }
  console.log("*************");
  console.log("Red :" + red);
  console.log("Blue :" + blue);
  console.log("Green :" + green);
  console.log("White :" + white);
}

function getFibonacciArray(value) {
  var sum = 1;
  var firstVal = (value == 0) ? 0 : 1;
  var nextValue = 1;
  var fibArray = [];
  fibArray.push(firstVal);
  while (value > sum) {
    fibArray.push(nextValue);
    nextValue = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    sum = fibArray.reduce(function(a, b) {
      return a + b
    });
  }
  
  var newArr = [];
  var newArrSum = 0;
  var i = fibArray.length - 1;
  if (fibArray[i] <= value) {
    newArr.push(fibArray[i]);
  }
  newArrSum = newArr.reduce(function(a) {
    return a
  });

  while (newArrSum < value && i != 0) {
    i = i - 1;
    newArr.push(fibArray[i]);
    newArrSum = newArr.reduce(function(a, b) {
      return a + b
    });
    if (newArrSum > value) {
      newArr.pop();
      i = i - 1;
      newArrSum = newArr.reduce(function(a, b) {
        return a + b
      });
    }
  }
  return newArr;
}

function applyColor(value, color) {
  var tds = "";
  if (value == 2) {
    tds = document.getElementsByClassName("two");
    tds[0].style.backgroundColor = color;
  } else if (value == 3) {
    tds = document.getElementsByClassName("three");
    tds[0].style.backgroundColor = color;
  } else if (value == 5) {
    tds = document.getElementsByClassName("five");
    tds[0].style.backgroundColor = color;
  } else if (value == 1) {
    tds = document.getElementsByClassName("one");
    if (tds[0].style.backgroundColor == "") {
      tds[0].style.backgroundColor = color;
    } else if (tds[1].style.backgroundColor == "") {
      tds[1].style.backgroundColor = color;
    }
  }
}