const placar = document.getElementById("score");
const tempo = document.getElementById("time");
const mario = document.getElementById("mario");
const cano = document.getElementById("cano");
const inicio = document.getElementById("inicio");
const restart = document.getElementById("restart");
const cdnd_mario = mario.getBoundingClientRect();
const cdnd_cano = cano.getBoundingClientRect();
var quantia = -1;

document.addEventListener("keypress", (tecla) => {
    if (tecla.keyCode === 32) {
        pulo();
    }
    else if (tecla.keyCode === 13) {
        start();
    }
});

function start() {
    if (inicio) {
        inicio.remove();
    }

    let random = Math.floor(Math.random() * 7);

    if (random === 0){ 
        random += 1 
    };

    cano.style.animation = "";

    contador = random;

    console.log("Ativou o start!");
    return cano_movimento(contador);
};

function cano_movimento(start) {
    console.log("Ativou o cano!")
    cano.style.animation = `movimento ${start}s`;
    return reseta(start);
};

function reseta(num) {
    setTimeout( () => {
        console.log("Ativou o reseta!");
        cano.style.animation = "nada";
        start();
    }, num * 1000);
    return pontuar();
};

function pontuar () {
    quantia += 1;
    placar.innerHTML = quantia;
};



let pulando = false;

function pulo() {
    if (!pulando) {
        mario.style.animation = "pulo 1s";
        pulando = true;
        setTimeout(function () {
            mario.style.animation = "";
            pulando = false;
        }, 1000);
    }
}

console.log("cano: ", cdnd_cano);
console.log("mario: ", cdnd_mario);