import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let randomSentence = who[Math.floor(Math.random() * 3)] + " " + action[Math.floor(Math.random() * 3)] + " " + what[Math.floor(Math.random() * 3)]+ " " + when[Math.floor(Math.random() * 3)];

  document.getElementById("excuse").innerHTML = randomSentence;

  console.log("Hello Rigo from the console!");
};
