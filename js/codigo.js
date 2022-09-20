const seccionAtaque = document.getElementById("seleccionarAtaque");
const btnMascotaJugador = document.getElementById("btnMascota");

const btnReiniciar = document.getElementById("btnReiniciar");

const seccionMascotas = document.getElementById("seleccionMascota");

const spanMascotaJugador = document.getElementById("tuMascota");

const spanMascotaEnemigo = document.getElementById("mascotaEnemigo");

const spanVidasJugador = document.getElementById("vida-jugador");
const spanVidaEnemigo = document.getElementById("vida-enemigo");

const sectionLog = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataqueDelJugador");
const ataquesEnemigo = document.getElementById("ataquesEnemigo");

const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigoAleatorio = [];
let ataquesMokeponEnemigo;
let opcionDeMokepones;
let opcionDeAtaque;
let inpHipodogue;
let inpCapipepo;
let inpRatigueya;
let btnTierra;
let btnFuego;
let btnAgua;
let botones = [];
let mascotaJugador;
let triunfos = 3;
let perdidas = 3;

class Mokepon {
    constructor(nombre, foto, vida, id) {
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
        <input type="radio" value=${mokepon.nombre} name="mascota" id=${mokepon.id} />
        <label class="tarjetaMokepon" for=${mokepon.id}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones;
        inpHipodogue = document.getElementById("btnHipodoge");
        inpCapipepo = document.getElementById("btnCapipepo");
        inpRatigueya = document.getElementById("btnRatigueya");
    });

    //DECLARACION BOTONES MASCOTAS
    btnMascotaJugador.addEventListener("click", seleccionMascotaJugador);

    btnReiniciar.addEventListener("click", reiniciar);
    btnReiniciar.style.display = "none";
}
function seleccionMascotaJugador() {
    seccionAtaque.style.display = "flex";
    seccionMascotas.style.display = "none";
    if (inpHipodogue.checked) {
        mascotaJugador = inpHipodogue.value;
        spanMascotaJugador.innerHTML = inpHipodogue.value;
    } else if (inpCapipepo.checked) {
        mascotaJugador = inpCapipepo.value;
        spanMascotaJugador.innerHTML = inpCapipepo.value;
    } else if (inpRatigueya.checked) {
        mascotaJugador = inpRatigueya.value
        spanMascotaJugador.innerHTML = inpRatigueya.value;
    } else {
        alert("Selecciona una mascota!");
    }
    extraerAtaques(mascotaJugador);
    seleccionMascotaEnemigo(0, mokepones.length - 1);
}
function extraerAtaques(mascotaJugador) {
    let ataques;
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }

    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        opcionDeAtaque = `<button id=${ataque.id} class="btnAtaques BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += opcionDeAtaque;
    })
    btnTierra = document.getElementById("btnTierra");
    btnFuego = document.getElementById("btnFuego");
    btnAgua = document.getElementById("btnAgua");
    botones = document.querySelectorAll(".BAtaque");

}

function secuenciaDeAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("Fuego");
                console.log(ataqueJugador);
                boton.style.background = "#112f58"
            } else if (e.target.textContent === "💦") {
                ataqueJugador.push("Agua");
                console.log(ataqueJugador);
                boton.style.background = "#112f58"
            } else {
                ataqueJugador.push("Tierra");
                console.log(ataqueJugador);
                boton.style.background = "#112f58"
            }
            ataqueEnemigo();
        })
    })
}

function seleccionMascotaEnemigo(min, max) {
    let mascotaEnemigo = aleatrorio(min, max);
    spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemigo].nombre;
    secuenciaDeAtaque();
}
function ataqueEnemigo() {
    let ataqueAleatorio = aleatrorio(0, mokepones.length - 1);
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigoAleatorio.push("Fuego");
        combate();
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 4 ) {
        ataqueEnemigoAleatorio.push("Agua");
        combate();
    } else {
        ataqueEnemigoAleatorio.push("Tierra");
        combate();
    }

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