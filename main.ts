function resetLights () {
    Environment.ledBrightness(AnalogPin.P1, false)
    Environment.ledBrightness(AnalogPin.P2, false)
    Environment.ledBrightness(AnalogPin.P3, false)
}
basic.clearScreen()
basic.showIcon(IconNames.Heart)
resetLights()
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
})
