let playerAtack = 0
let enemyAtack = 0
let resultado = ""
let playerVidas = 3
let enemyVidas = 3

function iniciarJuego() {

    // Primero ocultar lo que no se necesita
    document.getElementById("seleccionar-ataque").style.display = "none"
    document.getElementById("bt-reiniciar").style.display = "none"

    // Luego llamar a los botones
    document.getElementById("bt-mascota").addEventListener("click", seleccionmascota)
    document.getElementById("bt-agua").addEventListener("click", ataqueAgua)
    document.getElementById("bt-tierra").addEventListener("click", ataqueTierra)
    document.getElementById("bt-fuego").addEventListener("click", ataqueFuego)
    document.getElementById("bt-reiniciar").addEventListener("click",reiniciarJuego)
}
function seleccionmascota() {
    document.getElementById("seleccionar-ataque").style.display = "block"
    document.getElementById("seleccionar-mascota").style.display = "none"

    let mascotaSeleccionada = ""
    if (document.getElementById("aaguar").checked) {
        mascotaSeleccionada = "Aaguar"
    } else if (document.getElementById("ffuegor").checked) {
        mascotaSeleccionada = "Ffuegor"
    } else if (document.getElementById("ttierar").checked) {
        mascotaSeleccionada = "Ttierar"
    }
    if (mascotaSeleccionada != "") {
        alert("Seleccionaste la mascota: " + mascotaSeleccionada)
    } else {alert("⚠️ No seleccionaste nada")}
    document.getElementById("player-mascot").innerHTML = mascotaSeleccionada

    mascotaEnemiga()
}
function mascotaEnemiga() {
    let mascotEnemy = ""
    let numAleatorio = Math.floor(Math.random()*3)+1
    if (numAleatorio == 1) {
        mascotEnemy = "Aaguar"
    } else if (numAleatorio == 2) {
        mascotEnemy = "Ttierar"
    } else {mascotEnemy = "Ffuegor"}
    alert("Máquina va con; " + mascotEnemy)
    document.getElementById("enemy-mascot").innerHTML = mascotEnemy
}
function ataqueAgua() {
    playerAtack = 1
    ataqueEnemigo()
}
function ataqueTierra() {
    playerAtack = 2
    ataqueEnemigo()
}
function ataqueFuego() {
    playerAtack = 3
    ataqueEnemigo()
}
function ataqueEnemigo() {
    enemyAtack = Math.floor(Math.random()*3)+1
    
    if (playerAtack - enemyAtack == 0) {
        resultado = "Empate 🤝"
    } else if (playerAtack - enemyAtack == 1 || playerAtack - enemyAtack == -2) {
        resultado = "Ganaste 👍"
        enemyVidas --
        document.getElementById("enemy-vidas").innerHTML = enemyVidas
    } else {
        resultado = "Perdiste 👎"
        playerVidas --
        document.getElementById("player-vidas").innerHTML = playerVidas
    }

    crearMensaje()
}
function crearMensaje() {
    let mensajesSection = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    
    parrafo.innerHTML = "Tu mascota atacó con " + nombreAtaque(playerAtack) + " y el enemigo atacó con " + nombreAtaque(enemyAtack) + ". Por lo tanto " + resultado
    mensajesSection.appendChild(parrafo)

    verificarVidas()
}
function verificarVidas() {
    if (enemyVidas == 0) {
        alert("🥳🥳🎉 GANASTE!")
        document.getElementById("bt-agua").disabled = true
        document.getElementById("bt-tierra").disabled = true
        document.getElementById("bt-fuego").disabled = true
        document.getElementById("bt-reiniciar").style.display = "block"
    } else if (playerVidas == 0) {
        alert("😢 PERDISTE")
        document.getElementById("bt-agua").disabled = true
        document.getElementById("bt-tierra").disabled = true
        document.getElementById("bt-fuego").disabled = true
        document.getElementById("bt-reiniciar").style.display = "block"
    }
}
function nombreAtaque(ataque) {
    let nomAtaque = ""
    if (ataque == 1) {
        nomAtaque = "Agua 💧"
    } else if (ataque == 2) {
        nomAtaque = "Tierra 🌱"
    } else {nomAtaque = "Fuego 🔥"}
    return nomAtaque
}
function reiniciarJuego() {
    location.reload()
}
window.addEventListener("load",iniciarJuego)
