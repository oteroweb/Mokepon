const seccionAtaque = document.getElementById("seleccionarAtaque");
const btnMascotaJugador = document.getElementById("btnMascota");
const btnTierra = document.getElementById("btnTierra");
const btnFuego = document.getElementById("btnFuego");
const btnAgua = document.getElementById("btnAgua");
const btnReiniciar = document.getElementById("btnReiniciar");

const seccionMascotas = document.getElementById("seleccionMascota");
const inpHipodogue = document.getElementById("btnHipodoge");
const inpCapipepo = document.getElementById("btnCapipepo");
const inpRatigueya = document.getElementById("btnRatigueya");
const spanMascotaJugador = document.getElementById("tuMascota");

const spanMascotaEnemigo = document.getElementById("mascotaEnemigo");

const spanVidasJugador = document.getElementById("vida-jugador");
const spanVidaEnemigo = document.getElementById("vida-enemigo");

const sectionLog = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataqueDelJugador");
const ataquesEnemigo = document.getElementById("ataquesEnemigo");

let ataqueJugador;
let ataqueEnemigoAleatorio;
let triunfos = 3;
let perdidas = 3;
function iniciarJuego() {
    seccionAtaque.style.display = "none";
    //DECLARACION BOTONES MASCOTAS
    btnMascotaJugador.addEventListener("click", seleccionMascotaJugador);
    btnFuego.addEventListener("click", ataqueFuego);
    btnAgua.addEventListener("click", ataqueAgua);
    btnTierra.addEventListener("click", ataqueTierra);
    btnReiniciar.addEventListener("click", reiniciar);
    btnReiniciar.style.display = "none";
}
function seleccionMascotaJugador() {

    seccionAtaque.style.display = "flex";

    seccionMascotas.style.display = "none";

    let mascota = " ";
    if (inpHipodogue.checked) {
        mascota = "Hipodoge";
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (inpCapipepo.checked) {
        mascota = "Capipepo";
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (inpRatigueya.checked) {
        mascota = "Ratigueya"
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else {
        alert("Selecciona una mascota!");
    }
    seleccionMascotaEnemigo(1, 3);
}
function seleccionMascotaEnemigo(min, max) { 
    let mascotaEnemigo = aleatrorio(min, max);
    if (mascotaEnemigo == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if (mascotaEnemigo == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else if (mascotaEnemigo == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    }
}
function ataqueEnemigo() {
    let ataqueAleatorio = aleatrorio(1, 3);
    if (ataqueAleatorio == 1) {
        ataqueEnemigoAleatorio = "Fuego";
        combate();
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigoAleatorio = "Agua";
        combate();
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigoAleatorio = "Tierra";
        combate();
    }

}
function ataqueFuego() {
    ataqueJugador = "Fuego";
    ataqueEnemigo();
}
function ataqueAgua() {
    ataqueJugador = "Agua";
    ataqueEnemigo();
}
function ataqueTierra() {
    ataqueJugador = "Tierra";
    ataqueEnemigo();
}
function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");
    sectionLog.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigoAleatorio;
    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}
function finJuego(resultado) {
    sectionLog.innerHTML = resultado; 
    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;
    btnReiniciar.style.display = "block";
}
function combate() {
    if (ataqueJugador == ataqueEnemigoAleatorio) {
        resultado = "Empate";
        crearMensaje(resultado);
    } else if (ataqueJugador == "Fuego" && ataqueEnemigoAleatorio == "Tierra" || ataqueJugador == "Agua" && ataqueEnemigoAleatorio == "Fuego" || ataqueJugador == "Tierra" && ataqueEnemigoAleatorio == "Agua") {
        resultado = "¡Ganaste este combate 👑!";
        crearMensaje(resultado);
        perdidas--;
        spanVidaEnemigo.innerHTML = perdidas;
    } else {
        resultado = "Perdiste:(";
        crearMensaje(resultado);
        triunfos--;
        spanVidasJugador.innerHTML = triunfos;
    }
    revisarVidas();
}
function revisarVidas() {
    if (perdidas == 0) {
        finJuego("¡Ganaste este combate!");
    } else if (triunfos == 0) {
        finJuego("¡Perdiste este combate!");
    }
}
function reiniciar() {
    location.reload();
}
function aleatrorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);
//