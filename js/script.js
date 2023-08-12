let botton=document.getElementById("b1")
let game_home=document.getElementById("inicio")
let game=document.getElementById("game")
let marcador=document.getElementById("marcador")
let jugada_player=document.getElementById("j")
let jugada_pc=document.getElementById("p")
botton.addEventListener("click",iniciar_juego)
let partidas=0

function iniciar_juego()
{
    game_home.style.display="none"
    game.style.visibility="visible"
    marcador.style.visibility="visible"
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
let computadora=0

function eleccion(event)
{
    let boton_p=event.currentTarget.id
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
    computadora=aleatorio(1,3)
    console.log("Hola "+boton_p+" "+jugador)
    gameplay()
}

let puntaje_j=0  //jugador
let puntaje_p=0  //pc

function gameplay()
{
    if(con==3)
    {
        alert('juego acabado')
        location.reload()
    }
    else
    {
        jugada_player.innerHTML="el jugador lanzó "+jugador
        jugada_pc.innerHTML="El pc lanzó "+computadora
        console.log("el jugador saco "+jugador+" y el pc "+computadora)
        
        con++
    }
}