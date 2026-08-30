// Apple Catch — Lesson 3 Starter
// This is where Lesson 2 ended: player catches falling apples and scores points.
// Your mission: add a score, lives, timer, and a falling rotten apple!

scene.setBackgroundColor(6)

let player = sprites.create(img`
    . . f f f f . .
    . f 2 2 2 2 f .
    f 2 f f f f 2 f
    f 2 f . . f 2 f
    f 2 f f f f 2 f
    . f 2 2 2 2 f .
    . . f f f f . .
    `, SpriteKind.Player)
player.setPosition(80, 100)
controller.moveSprite(player, 100, 0)
player.setBounceOnWall(true)

let apple = sprites.create(img`
    . . 5 . .
    . 5 5 5 .
    5 5 5 5 5
    . 5 5 5 .
    . . 5 . .
    `, SpriteKind.Food)
apple.setPosition(Math.randomRange(10, 150), 0)
apple.setVelocity(0, 50)
apple.setFlag(SpriteFlag.AutoDestroy, true)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})


scene.setBackgroundColor(6)

let player = sprites.create(img`
    . . f f f f . .
    . f 2 2 2 2 f .
    f 2 f f f f 2 f
    f 2 f . . f 2 f
    f 2 f f f f 2 f
    . f 2 2 2 2 f .
    . . f f f f . .
    `, SpriteKind.Player)
player.setPosition(80, 100)
controller.moveSprite(player, 100, 0)
player.setBounceOnWall(true)

let apple = sprites.create(img`
    . . 5 . .
    . 5 5 5 .
    5 5 5 5 5
    . 5 5 5 .
    . . 5 . .
    `, SpriteKind.Food)
apple.setPosition(Math.randomRange(10, 150), 0)
apple.setVelocity(0, 50)
apple.setFlag(SpriteFlag.AutoDestroy, true)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
