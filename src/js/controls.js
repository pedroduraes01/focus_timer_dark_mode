import { Variables } from "./variables.js"
import { Sound } from "./sound.js"

const sound = Sound()

export function Contronls() {

    function florest() {

        if (Variables.wrapperFlorest.classList.contains('select-dark')) {
            sound.pauseAll()
            Variables.wrapperFlorest.classList.remove('select-dark')
            return
        }
        if (Variables.page.classList.contains('dark-mode')) {
            removeSelect()
            sound.florest()
            sound.pauseFlorest()
            Variables.wrapperFlorest.classList.add('select-dark')
            return
        }

        if (Variables.btnFlorest.classList.contains('btn-select')) {
            sound.pauseAll()

            Variables.btnFlorest.classList.remove('btn-select')
            Variables.inputFlorest.classList.remove('btn-select')
            return
        }

        removeSelect()
        sound.florest()
        sound.pauseFlorest()
        Variables.btnFlorest.classList.add('btn-select')
        Variables.inputFlorest.classList.add('btn-select')
    }

    function rain() {
        if (Variables.wrapperRain.classList.contains('select-dark')) {
            sound.pauseAll()
            Variables.wrapperRain.classList.remove('select-dark')
            return
        }
        if (Variables.page.classList.contains('dark-mode')) {
            removeSelect()
            sound.rain()
            sound.pauseRain()
            Variables.wrapperRain.classList.add('select-dark')
            return
        }

        if (Variables.btnRain.classList.contains('btn-select')) {
            sound.pauseAll()

            Variables.btnRain.classList.remove('btn-select')
            Variables.inputRain.classList.remove('btn-select')
            return
        }

        removeSelect()
        sound.pauseRain()
        sound.rain()
        Variables.btnRain.classList.add('btn-select')
        Variables.inputRain.classList.add('btn-select')
    }

    function coffe() {
        if (Variables.wrapperCoffe.classList.contains('select-dark')) {
            sound.pauseAll()
            Variables.wrapperCoffe.classList.remove('select-dark')
            return
        }
        if (Variables.page.classList.contains('dark-mode')) {
            removeSelect()
            sound.coffe()
            sound.pauseCoffe()
            Variables.wrapperCoffe.classList.add('select-dark')
            return
        }

        if (Variables.btnCoffe.classList.contains('btn-select')) {
            sound.pauseAll()

            Variables.btnCoffe.classList.remove('btn-select')
            Variables.inputCoffe.classList.remove('btn-select')
            return
        }

        removeSelect()
        sound.pauseCoffe()
        sound.coffe()
        Variables.btnCoffe.classList.add('btn-select')
        Variables.inputCoffe.classList.add('btn-select')
    }

    function fire() {
        if (Variables.wrapperFire.classList.contains('select-dark')) {
            sound.pauseAll()
            Variables.wrapperFire.classList.remove('select-dark')
            return
        }
        if (Variables.page.classList.contains('dark-mode')) {
            removeSelect()
            sound.fire()
            sound.pauseFire()
            Variables.wrapperFire.classList.add('select-dark')
            return
        }

        if (Variables.btnFire.classList.contains('btn-select')) {
            sound.pauseAll()

            Variables.btnFire.classList.remove('btn-select')
            Variables.inputFire.classList.remove('btn-select')
            return
        }

        removeSelect()
        sound.pauseFire()
        sound.fire()
        Variables.btnFire.classList.add('btn-select')
        Variables.inputFire.classList.add('btn-select')
    }

    function removeSelect() {
        Variables.btnFlorest.classList.remove('btn-select')
        Variables.btnRain.classList.remove('btn-select')
        Variables.btnCoffe.classList.remove('btn-select')
        Variables.btnFire.classList.remove('btn-select')

        Variables.inputFlorest.classList.remove('btn-select')
        Variables.inputRain.classList.remove('btn-select')
        Variables.inputCoffe.classList.remove('btn-select')
        Variables.inputFire.classList.remove('btn-select')

        Variables.wrapperFlorest.classList.remove('select-dark')
        Variables.wrapperRain.classList.remove('select-dark')
        Variables.wrapperCoffe.classList.remove('select-dark')
        Variables.wrapperFire.classList.remove('select-dark')
    }



    return {
        florest,
        rain,
        coffe,
        fire
    }
}