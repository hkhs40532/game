input.onButtonPressed(Button.A, function () {
    if (ghost.get(LedSpriteProperty.Y) == 2) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        game.addScore(1)
    }
})
let ghost: game.LedSprite = null
game.startCountdown(60000)
ghost = game.createSprite(0, 0)
ghost.turn(Direction.Right, 45)
basic.forever(function () {
    ghost.move(1)
    ghost.ifOnEdgeBounce()
    basic.pause(100)
})
