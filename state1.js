
demo.state1 = function(){};
demo.state1.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#60AA90';
        console.log('State1')
      
        addChangeStateEventListeners();
    },
    
    update: function(){}
};
