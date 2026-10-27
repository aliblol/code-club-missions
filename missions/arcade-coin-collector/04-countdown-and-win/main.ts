// Coin Collector — Mission 4 Starter
// This is where Mission 3 ended: the score and lives display is ready.
// Your mission: add a countdown and a win ending!

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

info.setScore(0)
info.setLife(3)
