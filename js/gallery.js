var level = 1;

Game.Gallery = function (game) {
  this.game = game;
};

Game.Gallery.prototype = {
  create: function () {
    this.game.stage.backgroundColor = '#dcdcdc';
    //Hintergrund & Title
    // this.background = this.add.image(0,0,'background')
    // background.setScale(3)
    // Background
    let background = this.add.image(0, 0, 'background');
    //background.setScale(3);
    // End Background

    // Button, der zum Menü führt
    this.menu_button = this.game.add.button(0, 10, this.makeBox(75, 75), this.gotoMenu, this);
    this.menu_button.tint = 0xff00ff;
    settingsbtn = this.game.add.image(10, 20, 'settings');
    //settingsbtn.setScale(0.5);


    //==============================================================================================

    // Text oberhalb der Bilder, der die Schwierigkeit anzeigt
    this.game.add.bitmapText(Game.w / 2, 40, 'minecraftia', difficulty, 36).anchor.setTo(0.5);;

    //==============================================================================================


    // Vermutlich der for loop, der die Bilder platziert
    x = 220;
    y = 160;
    count = 0
    for (var i = 1; i < 10; i++) {
      count += 1;
      var b = this.game.add.button(x, y, i.toString(), this.loadLevel, this);
      // b.gallery = i.toString();
      b.anchor.setTo(0.5);
      b.scale.x = 0.3;
      b.scale.y = 0.3;
      x += 300;
      // y += 20;
      if (count === 3) {
        count = 0;
        y += 220;
        x = 220;
      }


    }
    //==============================================================================================

  }, // Ende der create function

  // Funktions Black Boxen
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
  loadLevel: function () {
    // console.log(arguments[0].key);
    level = arguments[0].key;
    this.game.state.start('Play');
  }

};
