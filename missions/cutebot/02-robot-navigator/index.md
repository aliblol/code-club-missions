---
title: "Mission 2 — Robot Navigator"
layout: default
parent: Cutebot
---

# Mission 2 — Robot Navigator

Students move from simple movement into more purposeful control. In this mission, they design a robot path and use coded instructions to navigate from one point to another with a clear plan in mind.

The challenge helps them think about order, timing, and how a sequence of commands can create a more structured behaviour. It also introduces the idea that good programming is often about planning before coding.

## Starting code

{% include code-import.html %}

```typescript
function goDirection (direction: string) {
    radio.sendString(direction)
    serial.writeLine("Sent: " + direction)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    goDirection(RainbowLights)
})
let RainbowLights = ""
let currentGroup = 0
radio.setGroup(currentGroup)
basic.showString("" + (currentGroup))
basic.pause(500)
basic.clearScreen()
RainbowLights = "RainbowLights"
let forward = "forward"
let left = "left"
let right = "right"
let backward = "backward"
let stop = "stop"
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        goDirection(forward)
    } else if (input.buttonIsPressed(Button.A)) {
        goDirection(left)
    } else if (input.buttonIsPressed(Button.B)) {
        goDirection(right)
    } else if (input.rotation(Rotation.Pitch) > 60) {
        goDirection(backward)
    } else {
        goDirection(stop)
    }
})
```

Load this code into [MakeCode micro:bit](https://makecode.microbit.org) and follow the student guide.
