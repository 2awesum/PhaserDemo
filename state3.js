
demo.state3 = function(){};
demo.state3.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#80BB80';
        console.log('State3')
        addChangeStateEventListeners();
    },
    update: function(){}
};