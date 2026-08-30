// Apple Catch — Lesson 4 Starter
// This is where Lesson 3 ended: HUD is active, apple and rotten apple both fall.
// Your mission: make the rotten apple dangerous and add proper game over conditions!

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

// Rotten apple falls faster and will cost a life when touched (add that this lesson!)
let rottenApple = sprites.create(img`
    . . 8 . .
    . 8 8 8 .
    8 8 8 8 8
    . 8 8 8 .
    . . 8 . .
    `, SpriteKind.Enemy)
rottenApple.setPosition(Math.randomRange(10, 150), 0)
rottenApple.setVelocity(0, 70)
rottenApple.setFlag(SpriteFlag.AutoDestroy, true)

info.setScore(0)
info.setLife(3)
info.startCountdown(30)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})

info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
