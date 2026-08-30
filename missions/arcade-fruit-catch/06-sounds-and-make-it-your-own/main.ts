// Apple Catch — Lesson 6 Starter
// This is where Lesson 5 ended: fresh apples rain every 2s, rotten apples every 3s.
// Your mission: add sounds and effects, then make it your own!

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

info.setLife(3)
info.setScore(0)
info.startCountdown(30)

// Fresh apple loop — fires every 2 seconds
game.onUpdateInterval(2000, function () {
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
})

// Rotten apple loop — fires every 3 seconds, independently of the fresh apple loop
game.onUpdateInterval(3000, function () {
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
})

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

info.setLife(3)
info.setScore(0)
info.startCountdown(30)

// Apple loop — fires every 2 seconds
game.onUpdateInterval(2000, function () {
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
})

// Rotten apple loop — fires every 3 seconds, independently of the fresh apple loop
game.onUpdateInterval(3000, function () {
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
})

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
