export { Timer }
import { Sound } from "./sound.js";
import { Variables } from "./variables.js";

const sound = Sound()

function Timer() {

    function updateTimer() {
        let minutes = Number(Variables.minutesDisplay.textContent)

        if (minutes == 0) {
            Variables.minutesDisplay.textContent = "05"
        }
    }

    function updateDisplay(minutes, seconds) {
        Variables.minutesDisplay.textContent = String(minutes).padStart(2, "0")
        Variables.secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function moreFiveMinutes() {
        let minutes = Number(Variables.minutesDisplay.textContent)
    
        updateDisplay(minutes + 5, 0)
        sound.pressAudio()
    }

    function minusFiveMinutes() {
        let minutes = Number(Variables.minutesDisplay.textContent)
    
        if(minutes <= 5) {
            alert('desculpe, não é possível ter um número menor do que 0.')
            return
        }
    
        updateDisplay(minutes - 5, 0)
        sound.pressAudio()
    }

    function countdown() {
        Variables.timerTimeOut = setTimeout(() => {
            let seconds = Variables.secondsDisplay.textContent
            let minutes = Variables.minutesDisplay.textContent

            if (minutes <= 0 && seconds <= 0) {
                updateTimer()
                sound.timeEdn()
                return
            }
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, seconds - 1)

            countdown()
        }, 1000);
    }

    return {
        countdown,
        updateDisplay,
        moreFiveMinutes,
        minusFiveMinutes
    }
}