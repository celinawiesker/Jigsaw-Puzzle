/*global Game*/
var difficulty;

Game.Menu = function(game){
  this.game = game;
};

Game.Menu.prototype =  {
    create: function() {
        
        difficulty = 'normal';
        this.puzzle = new Puzzle(this.game, this.makeBox(500,500), 5);  
        this.puzzle.scatter();

        this.puzzle.pieces.forEach(function(piece) {
          piece.inputEnabled = false;
          piece.input.enableDrag(false);
        });

        this.game.stage.backgroundColor = '#2d2d2d';
        this.titleText = this.game.add.bitmapText(Game.w/2, Game.h/2-100, 'minecraftia', "Jigsaw", 64 );
        this.titleText.anchor.setTo(0.5);
        this.titleText.tint = 0x00ff00;

        this.difficultyButtons = this.game.add.group();

        this.easyButton = this.game.add.button(Game.w/2, Game.h/2+75,'easy', this.difficultySelect, this); 
        this.easyButton.anchor.setTo(0.5);
        this.difficultyButtons.add(this.easyButton);


        this.normalButton = this.game.add.button(Game.w/2, Game.h/2+110,'normal', this.difficultySelect, this); 
        this.normalButton.anchor.setTo(0.5);
        this.normalButton.tint = 0xff00ff;
        this.difficultyButtons.add(this.normalButton);

        this.hardButton = this.game.add.button(Game.w/2, Game.h/2+155,'hard', this.difficultySelect, this); 
        this.hardButton.anchor.setTo(0.5);

        this.difficultyButtons.add(this.hardButton);

        // Start Message
        this.startButton = this.game.add.button(Game.w/2, Game.h/2+220,'startbtn', this.begin, this,1); 
        this.startButton.anchor.setTo(0.5);

    },
    begin: function() {
        this.game.state.start('Gallery');
    },
    difficultySelect: function(button) {
      this.difficultyButtons.forEach(function(btn) {
        btn.tint = 0xffffff;
      });
      button.tint = 0xff00ff;
      difficulty = button.key;
    }, 
    makeBox: function(x,y) {
      var bmd = this.game.add.bitmapData(x, y);
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, x, y);
      bmd.ctx.fillStyle = '#0000ff';
			bmd.ctx.lineStyle = 4;
      bmd.ctx.strokeStyle = '#ff00ff';
      bmd.ctx.fill();
      return bmd;
    },
  
};
