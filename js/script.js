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


//Juego principal
// 1->👊🏽 2->📄 3->✂️
let jugador=0
con=0
document.getElementById("piedra").addEventListener("click",eleccion)
document.getElementById("papel").addEventListener("click",eleccion)
document.getElementById("tijera").addEventListener("click",eleccion)

function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + 1)
}
let computadora=aleatorio(1,3)

function eleccion(event)
{
    let boton_p=event.target.id
    if(boton_p==="piedra")
    {
        jugador=1
    }
    else if(boton_p==="papel")
    {
        jugador=2
    }
    else
    {
        jugador=3
    }
    console.log(boton_p+" "+jugador)
    gameplay()
}

let puntaje_j=0  //jugador
let puntaje_p=0  //pc

function gameplay()
{
    if(con==3)
    {
        alert('juego acabado')
    }
    else
    {
        console.log("el jugador saco "+jugador+" y el pc "+computadora)
        con++
    }
}