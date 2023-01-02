radio.onReceivedString(function (onReceivedString) {
    if (onReceivedString == "A") {
        motor.moveClockwise(1, stepUnit.Rotations)
        
    }
    if (onReceivedString == "B") {
        motor.moveAntiClockwise(1, stepUnit.Rotations)
       
    }
})
let motor: stepperMotor.Motor = null
motor = stepperMotor.createMotor(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P8
)
radio.setGroup(1)
