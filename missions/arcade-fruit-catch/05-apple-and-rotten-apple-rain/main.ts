// Apple Catch — Lesson 5 Starter
// This is where Lesson 4 ended: the game can be won AND lost, with messages.
// Your mission: replace the single apple and rotten apple with continuous rain loops!

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

// Single apple and rotten apple — replace these with loops this lesson!
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

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
})

info.onLifeZero(function () {
    game.splash("Oh no! You lost all lives!")
    game.over(false, effects.melt)
})

info.onCountdownEnd(function () {
    game.splash("Time's up! Well done!")
    game.over(true, effects.confetti)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setLife(3)
    info.setScore(0)
    info.startCountdown(30)
    player.setPosition(80, 100)
    game.splash("Game Reset! Try again!")
})
