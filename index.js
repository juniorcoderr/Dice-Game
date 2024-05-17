document.addEventListener("DOMContentLoaded", function () {
  // For the first dice

  //Generate a random number between 1 and 6 for the first dice
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  // Construct the image file name
  var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
  // Select the first img element
  var image1 = document.querySelector(".img1");
  // Set the src attribute to the new image file
  image1.setAttribute("src", randomImageSource1);

  // For the second dice
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw!🫡";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins🥳";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins🥳";
  }
});
