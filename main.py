def on_button_pressed_a():
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_icon(IconNames.SMALL_HEART)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    music.start_melody(music.built_in_melody(Melodies.RINGTONE), MelodyOptions.ONCE)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    basic.show_leds("""
        . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
    """)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_forever():
    pass
basic.forever(on_forever)
