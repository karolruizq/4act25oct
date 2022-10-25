input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(1000)
    loud_ness = input.soundLevel()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(loud_ness)
})
let loud_ness = 0
loud_ness = 0
