input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
basic.forever(function () {
	
})
