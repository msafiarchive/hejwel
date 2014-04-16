'use strict'

angular.module('hejwel')

.directive('hejwelWorld',
  function(ground, car, camera) {
    var args = arguments

    return {
      restrict: 'AE',
      link: function($scope, $element) {
        var game
        var hejwelWorldDomElement = $element[0]
        var gameObjects = args
        var text

        game = new Phaser.Game(
          window.innerWidth,
          window.innerHeight,
          Phaser.AUTO,
          hejwelWorldDomElement,
          {
            preload: function() {
              _.each(gameObjects, function(gameObject) {
                gameObject.setup(game)
              })
            },

            create: function() {
              game.time.advancedTiming = true

              _.each(gameObjects, function(gameObject) {
                gameObject.create()
              })
            },

            update: function() {
              car.update()
            },

            render: function() {
              var font = '14px Courier'
              var color = 'rgb(255,255,255)'

              game.debug.font = font
              game.debug.spriteInfo(car.p, 5, 20)
              game.debug.text('Speed: ' + car.getSpeed() + ' km/h', 5, 100, color, font)
              game.debug.text('FPS: ' + game.time.fps, 5, 120, color, font)
              game.debug.text('Car should be bound at: ' + Math.round(game.world.width * 0.7), 5, 140, color, font)
              game.debug.text('Car currently at: ' + car.p.x, 5, 160, color, font)

              camera.render()
            }
          }
        )
      }
    }
  }
)