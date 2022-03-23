var casas = [];
var casa;
for (let i = 0; i < 10; i++) {
  const casa = document.getElementById(`casa${[i]}`);
  casas.push(casa);
}
console.log(casas);

var jogadorX = "X";
var jogadorO = "O";

var jodadorDaVez = document.getElementById("jdv");
jodadorDaVez.innerHTML = jogadorX;


function jogada(num) {
    var casaEscolhida = document.getElementById(`casa${num}`);
    if( casaEscolhida.innerHTML != '') {
        alert('Esse campo ja foi preenchido escolha outro')
    } else {
        if(jodadorDaVez.innerHTML == jogadorX) {
            casaEscolhida.innerHTML = jogadorX;
            jodadorDaVez.innerHTML = jogadorO;
        } else {
            casaEscolhida.innerHTML = jogadorO;
            jodadorDaVez.innerHTML = jogadorX;
        }
    }
    
}
