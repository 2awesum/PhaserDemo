
demo.state8 = function(){};
demo.state8.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#202020';
        console.log('State8')
        addChangeStateEventListeners();
    },
    update: function(){}
};