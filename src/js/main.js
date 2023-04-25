import { Variables } from "./variables.js"
import { Timer } from "./timer.js"
import { Sound } from "./sound.js"
import { Contronls } from "./controls.js"

const controls = Contronls()

const sound = Sound()

const timer = Timer()

Variables.btnPlay.onclick = () => {
    timer.countdown()
    sound.pressAudio()
}

Variables.btnPause.onclick = () => {
    clearTimeout(Variables.timerTimeOut)
    sound.pressAudio()
}

Variables.btnMore.onclick = () => {
    timer.moreFiveMinutes()
}

Variables.btnMinus.onclick = () => {
    timer.minusFiveMinutes()
}

Variables.btnFlorest.addEventListener('click', () => {
    controls.florest()
})

Variables.btnRain.addEventListener('click', () => {
    controls.rain()
})

Variables.btnCoffe.addEventListener('click', () => {
    controls.coffe()
})

Variables.btnFire.addEventListener('click', () => {
    controls.fire()
})

Variables.btnLight.onclick = () => {
    addDarkMode()
}

Variables.btnDark.onclick = () => {
    removeDarkMode()
}

function addDarkMode() {
    Variables.btnLight.classList.add('hide')
    Variables.btnDark.classList.remove('hide')
    
    Variables.page.classList.add('dark-mode')
    Variables.timer.classList.add('dark')

    Variables.controlsTimer.classList.add('dark-timer')
    Variables.wrapperSound.classList.add('dark-card')
}

function removeDarkMode() {
    Variables.btnLight.classList.remove('hide')
    Variables.btnDark.classList.add('hide')
    Variables.page.classList.remove('dark-mode')
    Variables.timer.classList.remove('dark')

    Variables.controlsTimer.classList.remove('dark-timer')
    Variables.wrapperSound.classList.remove('dark-card')
}