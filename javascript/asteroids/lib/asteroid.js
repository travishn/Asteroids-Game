const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

function Asteroid(options = {}) {
  // this.pos = options.pos;
  options.color = options.color || "purple";
  options.radius = options.radius || 20;
  options.vel = options.vel || Util.randomVec(5);
  
  MovingObject.call(this, options.pos);
}

// Lets asteroid 'class' inherit moving object 'class'
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;





