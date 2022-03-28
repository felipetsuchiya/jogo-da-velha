var jogadorX = "X";
var jogadorO = "O";
var vencedor = "";
var jodadorDaVez = document.getElementById("jdv");
jodadorDaVez.innerHTML = jogadorX;
var casas = [];

var tabuleiro = [];
for (let t = 0; t < 10; t++) {
  tabuleiro.push(document.getElementById(`casa${t}`));
}
// console.log(tabuleiro);

var i = 0;
var c = 1;

function jogada(num) {
  var casaEscolhida = document.getElementById(`casa${num}`);
  if (casaEscolhida.innerHTML == "" && vencedor == "") {
    casas.push(casaEscolhida);
    console.log(casas);
    if (jodadorDaVez.innerHTML == jogadorX) {
      casaEscolhida.innerHTML = jogadorX;
      jodadorDaVez.innerHTML = jogadorO;
    } else {
      casaEscolhida.innerHTML = jogadorO;
      jodadorDaVez.innerHTML = jogadorX;
    }
  }

  i++;
  vencedor = endGame();
}

function endGame() {
  if (
    //Vitoria pela primeira linha
    tabuleiro[1].innerHTML == tabuleiro[2].innerHTML &&
    tabuleiro[2].innerHTML == tabuleiro[3].innerHTML &&
    tabuleiro[1].innerHTML !== ""
  ) {
    return tabuleiro[1].innerHTML;
  } else if (
    tabuleiro[4].innerHTML == tabuleiro[5].innerHTML &&
    tabuleiro[5].innerHTML == tabuleiro[6].innerHTML &&
    tabuleiro[4].innerHTML != ""
  ) {
    return tabuleiro[4].innerHTML;
  } else if (
    //Vitoria pela teceira linha
    tabuleiro[7].innerHTML == tabuleiro[8].innerHTML &&
    tabuleiro[8].innerHTML == tabuleiro[9].innerHTML &&
    tabuleiro[7].innerHTML != ""
  ) {
    return tabuleiro[7].innerHTML;
  } else if (
    //Vitoria pela primeira coluna
    tabuleiro[1].innerHTML == tabuleiro[4].innerHTML &&
    tabuleiro[4].innerHTML == tabuleiro[7].innerHTML &&
    tabuleiro[1].innerHTML != ""
  ) {
    return tabuleiro[1].innerHTML;
  } else if (
    //Vitoria pela segunda coluna
    tabuleiro[2].innerHTML == tabuleiro[5].innerHTML &&
    tabuleiro[5].innerHTML == tabuleiro[8].innerHTML &&
    tabuleiro[2].innerHTML != ""
  ) {
    return tabuleiro[2].innerHTML;
  } else if (
    //Vitoria pela terceira coluna
    tabuleiro[3].innerHTML == tabuleiro[6].innerHTML &&
    tabuleiro[6].innerHTML == tabuleiro[9].innerHTML &&
    tabuleiro[3].innerHTML != ""
  ) {
    return tabuleiro[3].innerHTML;
  } else if (
    //Vitoria pela primeira diagonal
    tabuleiro[1].innerHTML == tabuleiro[5].innerHTML &&
    tabuleiro[5].innerHTML == tabuleiro[9].innerHTML &&
    tabuleiro[1].innerHTML != ""
  ) {
    return tabuleiro[1].innerHTML;
  } else if (
    //Vitoria pela segunda diagonal
    tabuleiro[3].innerHTML == tabuleiro[5].innerHTML &&
    tabuleiro[5].innerHTML == tabuleiro[7].innerHTML &&
    tabuleiro[3].innerHTML != ""
  ) {
    return tabuleiro[3].innerHTML;
  }
  return "";
}

function reiniciar() {
  for (var i = 1; i < 10; i++) {
    tabuleiro[i].innerHTML = ""; //Limpa todas as casas
  }

  vencedor = "";
}
