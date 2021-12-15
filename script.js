
function pegaElem(id) {
    return document.getElementById(id);
}

function criarTags(tag) {
    return document.createElement(tag);
}
function criarEvent(id, type, callback) {
    let idPai = pegaElem(id);
    return idPai.addEventListener(type, callback);
}
function corAleatoria() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let cor = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
    return cor;
}
function corCerta() {
    let paiBall = pegaElem('paiBall');
    let rgb = pegaElem('rgb-color');
    if (paiBall.children.length > 0) {
        let aleat = parseInt(Math.random() * 5);
        paiBall.children[aleat].style.backgroundColor = corAleatoria();
        rgb.innerText = paiBall.children[aleat].style.backgroundColor;
    }
}

function circulos() {
    let paiBall = pegaElem('paiBall');
    for (i = 0; i < 6; i += 1) {
        ball = criarTags('div');
        ball.className = 'ball';
        ball.innerText = '';
        ball.style.backgroundColor = corAleatoria();
        paiBall.appendChild(ball);
    }
    corCerta();

}
let contador = 0;
function certoErrado(event) {
    let text = pegaElem('answer');
    let cor = pegaElem('rgb-color');
    let corrgb =  cor.innerText;
    if (event.target.style.backgroundColor === corrgb) {
        text.innerText = "Acertou!";
        contador += 1;
        placar(contador);
    } else {
        text.innerText = "Errou! Tente novamente!";

    }

}


function reset() {
    let paiBall = pegaElem('paiBall');
    while (paiBall.children.length > 0) {
        paiBall.removeChild(paiBall.firstChild);
    }
    circulos();
    let text = pegaElem('answer');
    text.innerText = "Escolha uma cor";
}

function placar(contar) {
      let score = pegaElem('score');
      let point = (contar * 3);
      score.innerText = point.toString();
    }




window.onload = function () {
    circulos();
    criarEvent('paiBall', 'click', certoErrado);
    criarEvent('reset-game', 'click', reset);
}

