let botton=document.getElementById("b1")
let game_home=document.getElementById("inicio")
let game=document.getElementById("game")
botton.addEventListener("click",iniciar_juego)
let partidas=0

function iniciar_juego()
{
    game_home.style.display="none"
    partidas=prompt('Ingresa por favor el número de partidas que deseas jugar')
    game.style.visibility="visible"
}
