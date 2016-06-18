
demo.state4 = function(){};
demo.state4.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDD90';
        console.log('State4')
        addChangeStateEventListeners();
    },
    update: function(){}
};