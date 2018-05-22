console.log("Webpack is working!");


const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
// const Bullet = require("./bullet.js");
// const GameView = require("./game_view.js");
// const Game = require("./game.js");
// const Ship = require("./ship.js");
const Utils = require("./utils.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Utils = Utils;

document.addEventListener("DOMContentLoaded", function(){
  window.canvasEl = document.getElementById("myCanvas");
  window.ctx = canvasEl.getContext("2d");
  window.mo = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});
  window.asteroid = new Asteroid({ pos: [50, 50] });
});