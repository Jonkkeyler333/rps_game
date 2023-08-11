let botton=document.getElementById("b1")
let game_home=document.getElementById("inicio")
let game=document.getElementById("game")
botton.addEventListener("click",iniciar_juego)
let partidas=0

function iniciar_juego()
{
    game_home.style.display="none"
    game.style.visibility="visible"
    temp=parseInt(prompt('Ingresa por favor el número de partidas que deseas jugar'))
    if (isNaN(temp))
    {
        alert('Has ingresado un dato invalido😒,Intentalo otra vez ')
        temp=prompt('Ingresa por favor el número de partidas que deseas jugar')
        partidas=parseInt(temp)
    }
    else
    {
        partidas=temp
    }
    console.log(typeof(partidas)+" "+partidas)
}

// 1->👊🏽 2->📄 3->✂️
jugador=0
document.getElementById("piedra").addEventListener("click",eleccion)
document.getElementById("papel").addEventListener("click",eleccion)
document.getElementById("tijera").addEventListener("click",eleccion)

function eleccion(event)
{
    let boton_p=event.target.id
    console.log(boton_p)
}