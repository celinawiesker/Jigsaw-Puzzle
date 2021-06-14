var Game = {
  w: 1024,
  h: 768 
};

// var w = 800;
// var h = 600;

Game.Boot = function(game) {
  this.game = game;
};

Game.Boot.prototype = {
  preload: function() {
    // console.log('blah'+Game.w);
		this.game.stage.backgroundColor = '#FFF';
    this.game.load.bitmapFont('minecraftia', 'assets/fonts/font.png', 'assets/fonts/font.xml'); //load default font


    //Scale Image to Fit Window
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.maxHeight = window.innerHeight;
    this.game.scale.maxWidth = window.innerHeight*(Game.w/Game.h);

  },

  //==============================================================================================

  create: function() {
   this.game.state.start('Load');
  }
};

Game.Load = function(game) {
  this.game = game;
};

Game.Load.prototype = {
  preload: function() {
    
    //Debug Plugin
    // this.game.add.plugin(Phaser.Plugin.Debug);

    this.game.load.image('easy','assets/images/easy.png');
    this.game.load.image('normal','assets/images/normal.png');
    this.game.load.image('hard','assets/images/hard.png');
    this.game.load.atlasXML('startbtn', 'assets/images/startbtn.png','assets/atlas/startbtn.xml'); 
    this.game.load.image('settings', 'assets/images/settings.png');
    this.game.load.image('preview', 'assets/images/preview.png');
    this.game.load.image('difficulty', 'assets/images/difficulty.png');
    this.game.load.image('background', 'assets/images/title.png');
    this.game.load.image('play_bg', 'assets/images/play_bg.png');

    for(var i = 1;i < 10;i++) {
      this.game.load.image(i.toString(), 'assets/images/'+i.toString()+'.png');
    }


    // console.log('custom'+this.game.net.getQueryString('custom'))
    // var custom_uri = this.game.net.getQueryString('custom');

  },
  create: function() {
    this.game.state.start('Gallery');
    // this.game.state.start('Play');
  }
};
