// declare the body and animationId variable
var body, animationId;

//body varible store the reference of the object node 'body'
body = document.getElementsByTagName("body")[0];

// fuction changeBody when invoked
function changeBody() {
  // declare an list of colors in x varibale
  var x = ["yellow", "green", "blue", "viloet", "pink", "purple", "#3b5998"];

  // setInterval will call back  changeColor function every 1s and
  // store the return value in animationId
  animationId = setInterval(changeColor, 1000);

  //var state = false;

  function changeColor() {
    // generate random num 0 - length of x
    var rand_color = Math.floor(Math.random() * x.length);

    // change body background color using the rand num as key
    // to retrieve a color in the x array
    body.style.backgroundColor = x[rand_color];

    //   body.style.backgroundColor = "#fff;";
  }
}

// Remove Event function when invoked
function removeEvent() {
  // stop the setInterval function
  clearInterval(animationId);
  // change the body background color back to white
  body.style.backgroundColor = "#fff";
}
