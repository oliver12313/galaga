let ship = sprites.create(img`
    . . . . 1 1 1 1 1 . . . . . . .
    . . . 1 1 1 f 1 1 1 . . . . . .
    . . . . 1 1 1 1 1 . . . . . . .
    . . . . . . f . . . . . . . . .
    . . . 2 . . f . . . . . . . . .
    . . 2 2 2 2 2 2 2 2 2 2 2 . . .
    . . 2 2 . . 2 . . . . . 2 2 2 .
    . . . 2 2 2 2 2 2 . . . . . 2 f
    . . . . 2 2 2 2 2 2 2 2 2 2 2 .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`,SpriteKind.Player )
ship.setStayInScreen(true)
controller.moveSprite(ship)

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
   let projectile = sprites.createProjectileFromSprite(img`
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . 4 4 4 4 4 4 4 4 4 4 . .
       . . . 4 4 4 4 4 4 4 4 4 4 4 4 .
       . . . 4 4 4 4 4 4 4 4 4 4 4 . .
       . . . . 4 4 4 4 4 4 4 . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
       . . . . . . . . . . . . . . . .
   `, ship, 200, 0) 
})
game.onUpdateInterval(200, function() {
    let blobby = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 7 7 7 7 7 7 7 2 2 . . . .
        . . . 7 . 2 2 . . 7 . 7 7 . . .
        . . . 7 7 . . 7 . . . . 7 7 . .
        . . . . 7 . 2 . . . 2 2 . 7 . .
        . . . . 7 7 2 2 2 2 2 . . . 7 .
        . . . . 7 7 7 7 7 7 . . . 7 7 .
        . . . . 7 7 7 7 7 7 7 7 7 7 . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
 `,SpriteKind.Enemy)
    blobby.setPosition(160, randint(0, 120))
    blobby.setVelocity(-300,0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {  
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function(sprite: Sprite, otherSprite: Sprite) { 
    info.changeLifeBy(-1)
      sprite.destroy(effects.fire, 200)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    let mySprite = sprites.createProjectileFromSprite(img`
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4
        2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 4
        2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 2
        4 2 2 2 2 2 2 2 2 2 4 2 4 4 4 4
        4 4 4 2 2 2 2 2 2 2 2 2 4 4 4 4
        4 4 4 4 2 2 2 4 4 4 4 2 4 4 4 4
        4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4
        4 . 4 4 4 4 4 4 2 2 4 4 4 4 4 2
        4 4 4 4 4 4 4 2 4 4 4 4 4 4 4 2
        2 4 4 4 4 4 4 2 2 4 4 4 4 4 4 2
        2 2 2 4 4 2 4 4 4 4 4 4 4 4 4 2
        4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2
        4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2
    `,ship ,100,0)
})
