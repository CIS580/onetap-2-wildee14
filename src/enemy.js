"use strict";

/**
 * @module exports the enemy class
 */
module.exports = exports = Enemy;


/**
 * @constructor enemy
 * Creates a new enemy object
 * @param {Postition} position object specifying an x and y
 */
function Enemy(position) {
  this.x = position.x;
  this.timer = 0;
  this.y = position.y;
  this.width  = 16;
  this.height = 16;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/armor%20lancer/armor%20lancer%20up.png');

  var self = this;
  window.onmousedown = function(event){
    self.x = event.clientX;
    if(self.state == "Waiting"){
        self.state = "Walking";
        self.x = event.clientX;
    }
}

/**
 * @function updates the enemy object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
enemy.prototype.update = function(time) {
    this.timer += time;
    switch(this.state){
       case "Walking":
        if (this.timer > 1/16) this.frame = (this.frame +1) % 4;
        this.y -= 1;
        this.timer = 0;
        break;
    }
}

/**
 * @function renders the enemy into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
enemy.prototype.render = function(time, ctx) {
  ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    this.frame * this.width, 0, this.width, this.height,
    // destination rectangle
    this.x, this.y, this.width, this.height
  );
}
