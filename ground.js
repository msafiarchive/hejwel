'use strict';

angular.module('hejwel')

.service('ground',
  function() {
    var ground = {}
    var game

    ground.setup = function(game_) {
      game = game_
      game.load.image('asphalt', 'assets/asphalt.jpg')
    }

    ground.create = function() {
      ground.p = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'asphalt');
    }

    return ground
})