const playerChoiceImg = document.getElementById('player-choice')
const computerChoiceImg = document.getElementById('computer-choice')
const mensaje = document.getElementById('mensaje')
const options = document.querySelectorAll('.option')

const PIEDRA = 'piedra'
const PAPEL = 'papel'
const TIJERAS = 'tijeras'
const PIEDRA_IMAGEN = './images/janken_gu.png'
const PAPEL_IMAGEN = './images/janken_pa.png'
const TIJERAS_IMAGEN = './images/janken_choki.png'
const VICTORIA = 'Ganaste!'
const DERROTA = 'Perdiste. Mejor suerte para la próxima.'
const EMPATE = 'Empate.'

for (let index = 0; index < options.length; index++) {
    const option = options[index]

    option.addEventListener('click', function (event) {
        let playerChoice
        let computerChoice
        let resultado

        playerChoice = event.target.id

        if (playerChoice === PIEDRA) {
            playerChoiceImg.setAttribute('src', PIEDRA_IMAGEN)
        }
        if (playerChoice === PAPEL) {
            playerChoiceImg.setAttribute('src', PAPEL_IMAGEN)
        }
        if (playerChoice === TIJERAS) {
            playerChoiceImg.setAttribute('src', TIJERAS_IMAGEN)
        }

        computerChoice = calcularEleccionCpu()

        if (computerChoice === PIEDRA) {
            computerChoiceImg.setAttribute('src', PIEDRA_IMAGEN)
        }
        if (computerChoice === PAPEL) {
            computerChoiceImg.setAttribute('src', PAPEL_IMAGEN)
        }
        if (computerChoice === TIJERAS) {
            computerChoiceImg.setAttribute('src', TIJERAS_IMAGEN)
        }

        resultado = calcularResultado(computerChoice, playerChoice)
        mensaje.innerHTML = resultado
    })
}

function calcularEleccionCpu() {
    const numeroAleatorio = Math.floor(Math.random() * 3)

    if (numeroAleatorio === 0) {
        return PIEDRA
    }

    if (numeroAleatorio === 1) {
        return PAPEL
    }

    if (numeroAleatorio === 2) {
        return TIJERAS
    }
}

function calcularResultado(eleccionCpu, eleccionJugador) {
    if (eleccionCpu === eleccionJugador) {
        return EMPATE
    }

    if (eleccionCpu === PIEDRA) {
        if (eleccionJugador === PAPEL) {
            return VICTORIA
        }
        if (eleccionJugador === TIJERAS) {
            return DERROTA
        }
    }

    if (eleccionCpu === PAPEL) {
        if (eleccionJugador === PIEDRA) {
            return DERROTA
        }
        if (eleccionJugador === TIJERAS) {
            return VICTORIA
        }
    }

    if (eleccionCpu === TIJERAS) {
        if (eleccionJugador === PIEDRA) {
            return VICTORIA
        }
        if (eleccionJugador === PAPEL) {
            return DERROTA
        }
    }
}
