let tiempo = 0
basic.forever(function () {
    let Distancia = 0
    tiempo = 0
    tiempo = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (Distancia < 5) {
        basic.showString("Coloque Vaso")
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
