input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
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
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 4882, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    basic.showLeds(`
        . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
    `)
})
basic.forever(function on_forever() {
    
})
