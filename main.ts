controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    mySprite.startEffect(effects.fire, 2000)
    pause(5000)
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c . . . . . . . . . . . . 
        . . c 6 c . . . . . . . . . . . 
        . . c 6 c 6 6 6 6 6 6 6 . . . . 
        . c c 6 c 9 9 9 9 9 9 9 6 . . . 
        c e e c 6 6 6 6 6 6 6 6 9 6 . . 
        . c c 6 c 9 9 9 9 9 9 9 6 . . . 
        . . c 6 c 6 6 6 6 6 6 6 . . . . 
        . . c 6 c . . . . . . . . . . . 
        . . . c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    music.knock.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f e e e e e e f 
        e 1 1 1 1 1 1 1 1 f e e e e e f 
        e 1 1 1 1 1 1 1 1 1 f e e e e f 
        e 1 1 8 1 1 8 1 1 1 f f f e e f 
        e 1 1 8 1 1 8 1 1 1 f 1 1 f e f 
        e 1 1 1 d d 1 1 1 1 d d 1 f f f 
        e 1 1 e e e e 1 1 1 d d d d d e 
        e e e e e e e e e e e e e e e e 
        . e 8 6 6 6 6 6 6 6 6 6 6 e e . 
        e d 8 9 9 9 9 9 9 9 6 6 e 1 d e 
        . e 8 8 8 8 8 8 8 8 8 8 8 e e . 
        . . f d d d b f d d d b b f . . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f e e e e e e f 
        e 1 1 1 1 1 1 1 1 f e e e e e f 
        e 1 1 1 1 1 1 1 1 1 f e e e e f 
        e 1 1 8 1 1 8 1 1 1 f f f e e f 
        e 1 1 8 1 1 8 1 1 1 f 1 1 f e f 
        e 1 1 1 d d 1 1 1 1 d d 1 f f f 
        e 1 1 e e e e 1 1 1 d d d d d e 
        e e e e e e e e e e e e e e e e 
        . e 8 6 6 6 6 6 6 6 6 6 6 e e . 
        e d 8 9 9 9 9 9 9 9 6 6 e 1 d e 
        . e 8 8 8 8 8 f d d d b b f e . 
        . . f d d d b f f f f f f f . . 
        . . f f f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f e e e e e e f 
        e 1 1 1 1 1 1 1 1 f e e e e e f 
        e 1 1 1 1 1 1 1 1 1 f e e e e f 
        e 1 1 8 1 1 8 1 1 1 f f f e e f 
        e 1 1 8 1 1 8 1 1 1 f 1 1 f e f 
        e 1 1 1 d d 1 1 1 1 d d 1 f f f 
        e 1 1 e e e e 1 1 1 d d d d d e 
        e e e e e e e e e e e e e e e e 
        . e 8 6 6 6 6 6 6 6 6 6 6 e e . 
        e d 8 9 9 9 9 9 9 9 6 6 e 1 d e 
        . e f d d d b f 8 8 8 8 8 e e . 
        . . f f f f f f d d d b b f . . 
        . . . . . . . . f f f f f f . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    mySprite.startEffect(effects.ashes, 100)
    tiles.setCurrentTilemap(tilemap`level4`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f e e e e e e e e e e e e e e f 
        f e e e e e e f f f f f f f f f 
        f e e e e e f 1 1 1 1 1 1 1 1 e 
        f e e e e f 1 1 1 1 1 1 1 1 1 e 
        f e e f f f 1 1 1 8 1 1 8 1 1 e 
        f e f 1 1 f 1 1 1 8 1 1 8 1 1 e 
        f f f 1 d d 1 1 1 1 d d 1 1 1 e 
        e d d d d d 1 1 1 e e e e 1 1 e 
        e e e e e e e e e e e e e e e e 
        . e e 6 6 6 6 6 6 6 6 6 6 8 e . 
        e d 1 e 6 6 9 9 9 9 9 9 9 8 d e 
        . e e 8 8 8 8 8 8 8 8 8 8 8 e . 
        . . f b b d d d f b d d d f . . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f e e e e e e e e e e e e e e f 
        f e e e e e e f f f f f f f f f 
        f e e e e e f 1 1 1 1 1 1 1 1 e 
        f e e e e f 1 1 1 1 1 1 1 1 1 e 
        f e e f f f 1 1 1 8 1 1 8 1 1 e 
        f e f 1 1 f 1 1 1 8 1 1 8 1 1 e 
        f f f 1 d d 1 1 1 1 d d 1 1 1 e 
        e d d d d d 1 1 1 e e e e 1 1 e 
        e e e e e e e e e e e e e e e e 
        . e e 6 6 6 6 6 6 6 6 6 6 8 e . 
        e d 1 e 6 6 9 9 9 9 9 9 9 8 d e 
        . e f b b d d d f 8 8 8 8 8 e . 
        . . f f f f f f f b d d d f . . 
        . . . . . . . . . f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f e e e e e e e e e e e e e e f 
        f e e e e e e f f f f f f f f f 
        f e e e e e f 1 1 1 1 1 1 1 1 e 
        f e e e e f 1 1 1 1 1 1 1 1 1 e 
        f e e f f f 1 1 1 8 1 1 8 1 1 e 
        f e f 1 1 f 1 1 1 8 1 1 8 1 1 e 
        f f f 1 d d 1 1 1 1 d d 1 1 1 e 
        e d d d d d 1 1 1 e e e e 1 1 e 
        e e e e e e e e e e e e e e e e 
        . e e 6 6 6 6 6 6 6 6 6 6 8 e . 
        e d 1 e 6 6 9 9 9 9 9 9 9 8 d e 
        . e e 8 8 8 8 8 f b d d d f e . 
        . . f b b d d d f f f f f f . . 
        . . f f f f f f . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy()
    mySprite2.startEffect(effects.disintegrate)
    music.smallCrash.play()
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
mySprite.setPosition(90, 136)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level0`)
controller.moveSprite(mySprite, 100, 0)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f f f f f f f f f b b 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 f b b b 7 7 f 
    f 7 7 7 7 7 7 7 7 7 f b b b 7 f 
    f 7 7 8 f 7 8 f 7 7 f f f b b f 
    f 7 7 7 7 7 7 7 7 7 f 7 7 f b f 
    f 7 7 7 f f 7 7 7 7 b b 7 f f f 
    f 7 7 e e e e 7 7 b b b b b b f 
    f f f f f f f f f f f f f f f f 
    . f 8 6 6 6 6 6 7 7 6 6 6 f f . 
    f 7 8 9 9 9 9 7 7 9 6 6 f 7 c f 
    . f 8 8 8 8 8 8 8 8 8 8 8 f f . 
    . . f d d d b f d d d b b f . . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Enemy)
mySprite.ay = 400
mySprite2.setPosition(150, 1)
info.setLife(1)
