Function.prototype.inherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.move = function() {
  console.log("I am moving!");
};

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.dodge = function() {
  console.log("I'm dodging asteroids!!");
};


function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.chase = function() {
  console.log("I'm chasing the ship!");
};

