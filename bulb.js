const on = document.getElementById("on")
const off = document.getElementById("off")
const reset = document.getElementById("reset")

const lamp = document.getElementById("lamp")

function isLampBroken(){
    return lamp.src.indexOf("quebrada") > -1
}

function turnon(){
    if(!isLampBroken()) {
        lamp.src = './img/ligada.png'
    }
    
}

function turnoff(){
    if(!isLampBroken()) {
        lamp.src = "./img/apagada.png"
    }
}

function brokenLamp(){
    if(!isLampBroken()) {
        lamp.src = "./img/quebrada.png"
    }
}

function resetLamp(){
    lamp.src = "./img/apagada.png"
}

on.addEventListener("click", turnon)
off.addEventListener("click", turnoff)
reset.addEventListener("click", resetLamp)
lamp.addEventListener("mouseover",turnon)
lamp.addEventListener("mouseleave",turnoff)
lamp.addEventListener("dblclick",brokenLamp)
