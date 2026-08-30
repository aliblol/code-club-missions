// Apple Catch — Lesson 2 Starter
// This is where Lesson 1 ended: a player that moves left and right and bounces.
// Your mission: create an apple that falls, and make catching it score a point!

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
// vy=0 locks the player to horizontal movement only
controller.moveSprite(player, 100, 0)
player.setBounceOnWall(true)
