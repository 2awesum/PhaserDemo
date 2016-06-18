
demo.state5 = function(){};
demo.state5.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#90FFFF';
        console.log('State5')
        addChangeStateEventListeners();
    },
    update: function(){}
};