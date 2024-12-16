const polohaX = document.getElementById("polohaX")
const polohaY = document.getElementById("polohaY")
const button = document.getElementById("button")
const vysledek = document.getElementById("vysledek")



button.onclick = function(){

let x = Number(polohaX.value);
let y = Number(polohaY.value);


if ((x>25 || y>25) + (x<-25 || y<-25)){
    vysledek.value = "nepatří"
}
    else{
        vysledek.value = "patří"
    }

}