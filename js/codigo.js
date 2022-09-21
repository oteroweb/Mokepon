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
const sectionVerMapa = document.getElementById("verMapa");
const mapa = document.getElementById("mapa");
let lienzo = mapa.getContext("2d");
let intervalo;
let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigoAleatorio = [];
let ataquesMokeponEnemigo;
let opcionDeMokepones;
let opcionDeAtaque;
let inpHipodogue;
let inpCapipepo;
let inpRatigueya;
let inpLangostelvis;
let inpPydos;
let inpTucapalma;
let btnTierra;
let btnFuego;
let btnAgua;
let botones = [];
let mascotaJugador;
let mascotaJugadorObjeto;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let indexAtaqueEnemigo;
let indexAtaqueJugador;
let mapaBackground = new Image();
mapaBackground.src = "./assets/img/mokemap.png"

class Mokepon {
    constructor(nombre, foto, vida, id,alto, ancho, fotoMapa, x, y,) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.id = id;
        this.x = aleatrorio(0, 540)+10;
        this.y = aleatrorio(0, 420)+10;
        this.alto = alto;
        this.ancho = ancho;
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        );
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/img/mokepons_mokepon_hipodoge_attack.png", 5, "btnHipodoge",40,40, "./assets/img/hipodoge.png");
let capipepo = new Mokepon("Capipepo", "./assets/img/mokepons_mokepon_capipepo_attack.png", 5, "btnCapipepo",40,40, "./assets/img/capipepo.png");
let ratigueya = new Mokepon("Ratigueya", "./assets/img/mokepons_mokepon_ratigueya_attack.png", 5, "btnRatigueya",40,40, "./assets/img/ratigueya.png");
let langostelvis = new Mokepon("Langostelvis", "./assets/img/mokepons_mokepon_langostelvis_attack.png", 5, "btnLangostelvis",80,80, "./assets/img/mokepons_mokepon_langostelvis_attack.png");
let pydos = new Mokepon("Pydos", "./assets/img/mokepons_mokepon_pydos_attack.png", 5, "btnPydos",80,80, "./assets/img/mokepons_mokepon_pydos_attack.png");
let tucapalma = new Mokepon("Tucapalma", "./assets/img/mokepons_mokepon_tucapalma_attack.png", 5, "btnTucapalma",80,80, "./assets/img/mokepons_mokepon_tucapalma_attack.png");

let hipodogeEnemigo = new Mokepon("Hipodoge", "./assets/img/mokepons_mokepon_hipodoge_attack.png", 5, "btnHipodoge",40,40, "./assets/img/hipodoge.png");
let capipepoEnemigo = new Mokepon("Capipepo", "./assets/img/mokepons_mokepon_capipepo_attack.png", 5, "btnCapipepo",40,40, "./assets/img/capipepo.png");
let ratigueyaEnemigo = new Mokepon("Ratigueya", "./assets/img/mokepons_mokepon_ratigueya_attack.png", 5, "btnRatigueya",40,40, "./assets/img/ratigueya.png");
let langostelvisEnemigo = new Mokepon("Langostelvis", "./assets/img/mokepons_mokepon_langostelvis_attack.png", 5, "btnLangostelvis",80,80, "./assets/img/mokepons_mokepon_langostelvis_attack.png");
let pydosEnemigo = new Mokepon("Pydos", "./assets/img/mokepons_mokepon_pydos_attack.png", 5, "btnPydos",80,80, "./assets/img/mokepons_mokepon_pydos_attack.png");
let tucapalmaEnemigo = new Mokepon("Tucapalma", "./assets/img/mokepons_mokepon_tucapalma_attack.png", 5, "btnTucapalma",80,80, "./assets/img/mokepons_mokepon_tucapalma_attack.png");


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
langostelvis.ataques.push(
    { nombre: "🔥", id: "btnFuego" },
    { nombre: "🔥", id: "btnFuego" },
    { nombre: "🔥", id: "btnFuego" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "🌱", id: "btnTierra" },
);
pydos.ataques.push(
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "🔥", id: "btnFuego" },
);

tucapalma.ataques.push(
    { nombre: "💦", id: "btnAgua" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "💦", id: "btnAgua" },
    { nombre: "🌱", id: "btnTierra" },
    { nombre: "🔥", id: "btnFuego" },
);

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos, tucapalma);

function iniciarJuego() {
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
        inpLangostelvis = document.getElementById("btnLangostelvis");
        inpPydos = document.getElementById("btnPydos");
        inpTucapalma = document.getElementById("btnTucapalma");

    });
    seccionAtaque.style.display = "none";
    //DECLARACION BOTONES MASCOTAS
    btnMascotaJugador.addEventListener("click", seleccionMascotaJugador);
    btnReiniciar.addEventListener("click", reiniciar);
    /* btnReiniciar.style.display = "none"; */
    sectionVerMapa.style.display = "none";

}
function seleccionMascotaJugador() {
    /* seccionAtaque.style.display = "flex"; */
    seccionMascotas.style.display = "none";
    sectionVerMapa.style.display = "flex";
    if (inpHipodogue.checked) {
        mascotaJugador = inpHipodogue.value;
        spanMascotaJugador.innerHTML = inpHipodogue.value;
    } else if (inpCapipepo.checked) {
        mascotaJugador = inpCapipepo.value;
        spanMascotaJugador.innerHTML = inpCapipepo.value;
    } else if (inpRatigueya.checked) {
        mascotaJugador = inpRatigueya.value
        spanMascotaJugador.innerHTML = inpRatigueya.value;
    } else if (inpLangostelvis.checked) {
        mascotaJugador = inpLangostelvis.value
        spanMascotaJugador.innerHTML = inpTucapalma.value;
    } else if (inpPydos.checked) {
        mascotaJugador = inpPydos.value
        spanMascotaJugador.innerHTML = inpTucapalma.value;
    } else if (inpTucapalma.checked) {
        mascotaJugador = inpTucapalma.value
        spanMascotaJugador.innerHTML = inpTucapalma.value;
    } else {
        alert("Selecciona una mascota!");
    }
    extraerAtaques(mascotaJugador);
    iniciarMapa();
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
                boton.disabled = true;
            } else if (e.target.textContent === "💦") {
                ataqueJugador.push("Agua");
                console.log(ataqueJugador);
                boton.style.background = "#112f58"
                boton.disabled = true;
            } else {
                ataqueJugador.push("Tierra");
                console.log(ataqueJugador);
                boton.style.background = "#112f58"
                boton.disabled = true;
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
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 4) {
        ataqueEnemigoAleatorio.push("Agua");
    } else {
        ataqueEnemigoAleatorio.push("Tierra");
    }
    iniciarPelea();
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate();
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");
    sectionLog.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;
    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}
function finJuego(resultado) {
    sectionLog.innerHTML = resultado;
    btnReiniciar.style.display = "block";
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigoAleatorio[enemigo];
}

function combate() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] == ataqueEnemigoAleatorio[i]) {
            indexAmbosOponentes(i, i);
            resultado = "Empate";
            crearMensaje(resultado);
        } else if (ataqueJugador[i] == "Fuego" && ataqueEnemigoAleatorio[i] == "Tierra" || ataqueJugador[i] == "Agua" && ataqueEnemigoAleatorio[i] == "Fuego" || ataqueJugador[i] == "Tierra" && ataqueEnemigoAleatorio[i] == "Agua") {
            indexAmbosOponentes(i, i);
            resultado = "¡Ganaste este combate 👑!";
            crearMensaje(resultado);
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;;

        } else {
            indexAmbosOponentes(i, i);
            resultado = "Perdiste:(";
            crearMensaje(resultado);
            victoriasEnemigo++;
            spanVidaEnemigo.innerHTML = victoriasEnemigo;
        }
    }
}
function revisarVidas() {
    if (victoriasJugador == victoriasEnemigo) {
        finJuego("¡Empate!");
    } else if (victoriasJugador > victoriasEnemigo) {
        finJuego("¡Ganaste este combate!");
    } else {
        finJuego("¡Perdiste este combate!");
    }
}

function pintarCanvas() {

    mascotaJugadorObjeto.x += mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y += mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground, 0, 0, mapa.width, mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon();
    hipodogeEnemigo.pintarMokepon();
    capipepoEnemigo.pintarMokepon();
    ratigueyaEnemigo.pintarMokepon();
    langostelvisEnemigo.pintarMokepon();
    pydosEnemigo.pintarMokepon();
    tucapalmaEnemigo.pintarMokepon();

}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX += 5;
    pintarCanvas();
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX -= 5;
    pintarCanvas();
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY -= 5;
    pintarCanvas();
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY += 5;
    pintarCanvas();
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba();
            break;
        case "ArrowDown":
            moverAbajo();
            break;
        case "ArrowLeft":
            moverIzquierda();
            break;
        case "ArrowRight":
            moverDerecha();
            break;
        default:
            break;
    }
}

function seSoltoUnaTecla() {
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function iniciarMapa() {
    mapa.width = 520;
    mapa.height = 440;
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener("keydown", sePresionoUnaTecla);
    window.addEventListener("keyup", seSoltoUnaTecla);
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
            return mokepones[i]
        }
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