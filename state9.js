
demo.state9 = function(){};
demo.state9.prototype = {
  preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#603090';
        console.log('State9')
        addChangeStateEventListeners();
    },
    update: function(){}
};