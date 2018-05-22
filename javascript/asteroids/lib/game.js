const MovingObject = require("./moving_object");

function Game() {
  const DIM_X = 700;
  const DIM_Y = 700;
  const NUM_ASTEROIDS = 10;
  const asteroids = [];
  
  this.addAsteroids(NUM_ASTEROIDS);
}

Game.prototype.addAsteroids = function(num) {
  for (let i = 0; i < num; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition()));
  }
};

Game.prototype.randomPosition = function() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  return [getRandomInt(700), getRandomInt(700)];
};