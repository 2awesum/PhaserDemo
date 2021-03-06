var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, doge, speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('doge', 'assets/spritesheets/doge.png', 512, 512);
        game.load.image('tree', 'assets/background/treeBG.png')
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        console.log('State0');
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var treeBG = game.add.sprite(0, 0, 'tree');
        doge = game.add.sprite(centerX, centerY, 'doge');
        doge.anchor.setTo(0.5, 0.5);
        doge.scale.setTo(-0.6, 0.6);
        game.physics.enable(doge);
        doge.body.collideWorldBounds = true;
        doge.animations.add('walk', [0, 1, 2, 3, 4, 5]);
        
        game.camera.follow(doge);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0,600, 1000);
        
        
    
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            doge.scale.setTo(-0.6, 0.6)
            doge.x += speed;
            doge.animations.play('walk', 14, true)
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            doge.scale.setTo(0.6, 0.6)
            doge.x -= speed;
            doge.animations.play('walk', 14, true)
        }
        else {
            doge.animations.stop('walk');
            doge.frame = 0;
        }
                if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            doge.y -= speed;
                    if(doge.y < 395){
                        doge.y = 395;
                    }
        }
                else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            doge.y += speed;
        }
        
        
    }
};
    

function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
        addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
    
}