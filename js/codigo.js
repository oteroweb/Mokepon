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

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones = [];
let ataqueJugador;
let ataqueEnemigoAleatorio;
let opcionDeMokepones;
let triunfos = 3;
let perdidas = 3;

class Mokepon {
    constructor(nombre, foto, vida,id) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.id = id;
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/img/mokepons_mokepon_hipodoge_attack.png", 5, "btnHipodoge");
let capipepo = new Mokepon("Capipepo", "./assets/img/mokepons_mokepon_capipepo_attack.png", 5, "btnCapipepo");
let ratigueya = new Mokepon("Ratigueya", "./assets/img/mokepons_mokepon_ratigueya_attack.png", 5, "btnRatigueya");


hipodoge.ataques.push(
    { nombre: "💦", id: "btnAgua" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "🔥", id: "btnFuego" },
);
capipepo.ataques.push(
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "🔥", id: "btnFuego" },
);
ratigueya.ataques.push(
    { nombre: "🔥", id: "btnFuego" },
    { nombre: "🔥", id: "btnFuego" },
    { nombre: "🔥", id: "btnFuego" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "🌱", id: "btnTierra" },
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
    seccionAtaque.style.display = "none";
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" value=${mokepon.nombre} name="mascota" id=${mokepon.id}>
        <label class="tarjetaMokepon" for=${mokepon.id}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones;
    });
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