/*global Game*/

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */

// // Choose Random integer in a range
// function rand (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var musicOn = true;


var wKey;
var aKey;
var sKey;
var dKey;
var score = 0;

Game.Play = function (game) {
  this.game = game;
};

Game.Play.prototype = {
  init: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);
  },
  create: function () {
    this.game.world.setBounds(0, 0, Game.w, Game.h);

    // Background
    let background = this.add.image(0, 0, 'play_bg');
    //background.setScale(3);
    this.game.stage.backgroundColor = '#2d2d2d';
    // this.background = this.add.image(0,0,'background')
    // background.setScale(3)
    // End Background

    this.game_won = false;

    if (difficulty === 'easy') {
      this.square = 3;
    } else if (difficulty === 'normal') {
      this.square = 5;
    } else if (difficulty === 'hard') {
      this.square = 10;
    }

    // this.puzzles = ['cat','prehistory','skyscrapers','boxing'];
    // this.puzzles = ['horse','cat','apple','flower',];

    this.puzzle = new Puzzle(this.game, level.toString(), this.square);
    this.puzzle.scatter();

    // Preview Button
    this.preview_button = this.game.add.button(Game.w - 70, 10, this.makeBox(75, 75), this.puzzle.preview_toggle, this.puzzle);
    this.preview_button.tint = 0xff43601c;
    this.game.add.image(Game.w - 60, 20, 'preview');

    // Menu Button, kann ich hier mit Bildern arbeiten?
    this.menu_button = this.game.add.button(0, 10, this.makeBox(75, 75), this.gotoMenu, this);
    this.menu_button.tint = 0xff00ff;
    settingsbtn = this.game.add.image(10, 20, 'settings');
    //settingsbtn.setScale(0.5);

  },
  gotoMenu: function () {
    this.game.state.start('Menu');
  },
  makeBox: function (x, y) {
    var bmd = this.game.add.bitmapData(x, y);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, x, y);
    bmd.ctx.fillStyle = '#fff';
    bmd.ctx.fill();
    return bmd;
  },
  update: function () {

    // Kann man hier einbauen, dass nach einem gewonnen Spiel, direkt wieder in die Gallery gesprungen wird?
    if (this.puzzle.won === true) {
      this.game.input.onUp.add(this.nextLevel, this);
      this.win_text = this.game.add.bitmapText(Game.w / 2, Game.h / 2, 'minecraftia', 'GREAT JOB!\nClick to Play Again.', 24);
      this.win_text.anchor.setTo(0.5);
    }

  },
  nextLevel: function () {
    this.game.state.start('Gallery');
  },
};
