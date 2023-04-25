export { Sound }

function Sound() {
    const buttonFlorest = new Audio('../assets/sound/Floresta.wav')
    const buttonRain = new Audio('/src/assets/sound/Chuva.wav')
    const buttonCoffe = new Audio('/src/assets/sound/Cafeteria.wav')
    const buttonFire = new Audio('/src/assets/sound/Lareira.wav')
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function florest() {
        buttonFlorest.play()
        buttonFlorest.loop = true
    }

    function rain() {
        buttonRain.play()
        buttonFire.loop = true
    }

    function coffe() {
        buttonCoffe.play()
        buttonCoffe.loop = true
    }

    function fire() {
        buttonFire.play()
        buttonFire.lopp = true
    }

    function pressAudio() {
        buttonPressAudio.play()
    }

    function timeEdn() {
        kitchenTimer.play()
    }

    function pauseAll() {
        buttonFlorest.pause()
        buttonRain.pause()
        buttonCoffe.pause()
        buttonFire.pause()
    }

    function pauseFlorest() {
        buttonRain.pause()
        buttonCoffe.pause()
        buttonFire.pause()
    }

    function pauseRain() {
        buttonFlorest.pause()
        buttonCoffe.pause()
        buttonFire.pause()
    }

    function pauseCoffe() {
        buttonFlorest.pause()
        buttonRain.pause()
        buttonFire.pause()
    }

    function pauseFire() {
        buttonFlorest.pause()
        buttonRain.pause()
        buttonCoffe.pause()
    }

    return {
        florest,
        rain,
        coffe,
        fire,
        pressAudio,
        timeEdn,
        pauseAll,
        pauseFlorest,
        pauseRain,
        pauseCoffe,
        pauseFire
    }
}
