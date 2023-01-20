input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # # .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
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
input.onGesture(Gesture.TiltRight, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 4882, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
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
