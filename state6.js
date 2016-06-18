
demo.state6 = function(){};
demo.state6.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF90FF';
        console.log('State6')
        addChangeStateEventListeners();
    },
    update: function(){}
};