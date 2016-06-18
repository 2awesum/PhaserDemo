
demo.state7 = function(){};
demo.state7.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF6090';
        console.log('State7')
        addChangeStateEventListeners();
    },
    update: function(){}
}; 