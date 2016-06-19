
demo.state1 = function(){};

var cursors, vel = 500, rocks, grass;

demo.state1.prototype = {
  preload: function(){
      game.load.tilemap('field', 'assets/tiles/field.json', null, Phaser.Tilemap.TILED_JSON);
      game.load.image('Unknown', 'assets/tiles/Unknown.png');
      game.load.image('rockTiles', 'assets/tiles/rockTiles.png');
      game.load.image('doge', 'assets/sprites/Unknown.png');
  },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#60AA90';
        console.log('State1')
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('Unknown');
        map.addTilesetImage('rockTiles');
        
        grass = map.createLayer('Grass');
        rocks = map.createLayer('Rocks');
        
        map.setCollisionBetween(1, 9, true, 'Rocks');
        map.setCollision(11, true, 'Grass')
        
        doge = game.add.sprite(200, 200, 'doge');
        doge.scale.setTo(0.2, 0.2);
        game.physics.enable(doge);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        game.physics.arcade.collide(doge, rocks, function(){console.log('Hitting Rocks!')});
        game.physics.arcade.collide(doge, grass, function(){console.log('Hitting Grass!')});
        
        if(cursors.up.isDown){
            doge.body.velocity.y = -vel
        }
         else if(cursors.down.isDown){
            doge.body.velocity.y = vel
        }
        else {
            doge.body.velocity.y = 0
        }
         if(cursors.right.isDown){
            doge.body.velocity.x = vel
        }
         else if(cursors.left.isDown){
            doge.body.velocity.x = -vel
        }
          else {
            doge.body.velocity.x = 0
        }
        
    }
};
