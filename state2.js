
demo.state2 = function(){};
demo.state2.prototype = {
  preload: function(){},
    create: function(){
        
        game.stage.backgroundColor = '#DDDDDD';
        console.log('State2')
        addChangeStateEventListeners();
    },
    
    update: function(){}
};