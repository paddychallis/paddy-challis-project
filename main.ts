namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
let Projectile_1: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101020101020101030103010302010203010303`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . . e e d d d e . . . . . . 
. . . . e d f d f d . . . . . . 
. . . . d d d 3 d d . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 . 2 2 2 2 2 2 . 2 . . . . 
. . 2 . 2 2 2 2 2 2 . 2 . . . . 
. . d . 2 2 2 2 2 2 . d . . . . 
. . . . f f f f f f . . . . . . 
. . . . 6 6 6 6 6 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . d . . . . d . . . . . . 
. . . . f f . . . f f . . . . . 
`, SpriteKind.Player)
mySprite.ay = 500
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
effects.clouds.startScreenEffect()
music.playMelody("A F E F D G E F ", 120)
game.onUpdateInterval(1000, function () {
    Projectile_1 = sprites.createProjectileFromSide(img`
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 . 
7 7 7 7 7 e 7 e e 7 7 e e 7 7 . 
. 7 7 7 7 e e e e e e e 7 7 7 . 
. . 7 7 7 7 e e e e 7 7 7 7 7 . 
. . . 7 7 7 e e e e . 7 7 7 . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . e e e e e e e e e e . . . 
. . e e e e e e e e e e e e . . 
`, Math.randomRange(-100, -80), 0)
    tiles.placeOnTile(Projectile_1, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
