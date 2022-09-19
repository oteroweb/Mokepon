let ataqueJugador;
let ataqueEnemigoAleatorio;
let triunfos = 3;
let perdidas = 3;
function iniciarJuego() {
    let seccionAtaque = document.getElementById("seleccionarAtaque");
    seccionAtaque.style.display = "none";

    //DECLARACION BOTONES MASCOTAS
    let btnMascotaJugador = document.getElementById("btnMascota");
    btnMascotaJugador.addEventListener("click", seleccionMascotaJugador);

    let btnFuego = document.getElementById("btnFuego");
    btnFuego.addEventListener("click", ataqueFuego);

    let btnAgua = document.getElementById("btnAgua");
    btnAgua.addEventListener("click", ataqueAgua);

    let btnTierra = document.getElementById("btnTierra");
    btnTierra.addEventListener("click", ataqueTierra);

    let btnReiniciar = document.getElementById("btnReiniciar");
    btnReiniciar.addEventListener("click", reiniciar);
    btnReiniciar.style.display = "none";
}
function seleccionMascotaJugador() {
    let seccionAtaque = document.getElementById("seleccionarAtaque");
    seccionAtaque.style.display = "flex";
    let seccionMascotas = document.getElementById("seleccionMascota");
    seccionMascotas.style.display = "none";
    let inpHipodogue = document.getElementById("btnHipodoge");
    let inpCapipepo = document.getElementById("btnCapipepo");
    let inpRatigueya = document.getElementById("btnRatigueya");
    let spanMascotaJugador = document.getElementById("tuMascota");
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
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
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
    let sectionLog = document.getElementById("resultado");
    let ataqueDelJugador = document.getElementById("ataqueDelJugador");
    let ataquesEnemigo = document.getElementById("ataquesEnemigo");


    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");

    sectionLog.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigoAleatorio;

    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}
function finJuego(resultado) {
    let sectionLog = document.getElementById("resultado");
    sectionLog.innerHTML = resultado;

    let btnFuego = document.getElementById("btnFuego");
    btnFuego.disabled = true;

    let btnAgua = document.getElementById("btnAgua");
    btnAgua.disabled = true;

    let btnTierra = document.getElementById("btnTierra");
    btnTierra.disabled = true;

    let btnReiniciar = document.getElementById("btnReiniciar");
    btnReiniciar.style.display = "block";
}
function combate() {
    let spanVidasJugador = document.getElementById("vida-jugador");
    let spanVidaEnemigo = document.getElementById("vida-enemigo");
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
function revisarVidas(){
    if(perdidas == 0){
        finJuego("¡Ganaste este combate!");
    }else if(triunfos == 0){
        finJuego("¡Perdiste este combate!");
    }
}
function reiniciar(){
    location.reload();
}
function aleatrorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);
//