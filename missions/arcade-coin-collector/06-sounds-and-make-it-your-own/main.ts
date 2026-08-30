// Coin Collector — Lesson 6 Starter
// This is where Lesson 5 ended: welcome screen, hit messages, and coin rain.
// Your mission: add sounds, then make the game your own!

game.splash("Coin Collector!!")

scene.setBackgroundColor(9)

let player = sprites.create(img`
    . . . . . . 2 2 2 2 2 . . . . .
    . . . . . . 2 2 2 2 2 . . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
player.setPosition(80, 60)
controller.moveSprite(player, 100, 100)
player.setBounceOnWall(true)

let enemy = sprites.create(img`
    . . . . . . 5 5 5 5 5 . . . . .
    . . . . . . 5 5 5 5 5 . . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
enemy.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
enemy.setVelocity(50, 50)
enemy.setBounceOnWall(true)

info.setScore(0)
info.setLife(3)
info.startCountdown(30)

// Loop: a new coin appears every 1 second
game.onUpdateInterval(1000, function () {
    let coin = sprites.create(img`
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . 8 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 8 8 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, SpriteKind.Food)
    coin.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
    if (info.life() > 0) {
        game.splash("Try again! Lives left: " + info.life())
        sprite.setPosition(80, 60)
    }
})

info.onLifeZero(function () {
    game.over(false, effects.melt)
})

info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
