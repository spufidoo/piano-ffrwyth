input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(sound, music.beat(BeatFraction.Quarter))
        sound += -25
    }
    sound = 440
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(sound, music.beat(BeatFraction.Quarter))
        sound += 25
    }
    sound = 440
})
let sound = 0
sound = 440
