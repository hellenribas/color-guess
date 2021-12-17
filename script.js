
function pegaElem(id) {
    return document.getElementById(id);
}
function criarTags(tag) {
    return document.createElement(tag);
}
function criarEvent(id, type, callback) {
    const idPai = pegaElem(id);
    return idPai.addEventListener(type, callback);
}
function corAleatoria() {
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);
    const cor = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
    return cor;
}
function corCerta() {
    const paiBall = pegaElem('paiBall');
    const rgb = pegaElem('rgb-color');
    if (paiBall.children.length > 0) {
        const aleat = parseInt(Math.random() * 5);
        paiBall.children[aleat].style.backgroundColor = corAleatoria();
        rgb.innerText = paiBall.children[aleat].style.backgroundColor;
    }
}
function circulos() {
    const paiBall = pegaElem('paiBall');
    for (let i = 0; i < 6; i += 1) {
        let ball = criarTags('div');
        ball.className = 'ball';
        ball.innerText = '';
        ball.style.backgroundColor = corAleatoria();
        paiBall.appendChild(ball);
    }
    corCerta();
}
let contador = 0;
function certoErrado(event) {
    const text = pegaElem('answer');
    const cor = pegaElem('rgb-color');
    const corrgb = cor.innerText;
    if (event.target.style.backgroundColor === corrgb) {
        text.innerText = "Acertou!";
        contador += 1;
        placar(contador);
        reset();
    } else {
        text.innerText = "Errou! Tente novamente!";
    }
}
function placar(contar) {
    const score = pegaElem('score');
    const point = (contar * 3);
    score.innerText = point.toString();
}
function reset() {
    const paiBall = pegaElem('paiBall');
    while (paiBall.children.length > 0) {
        paiBall.removeChild(paiBall.firstChild);
    }
    circulos();
    const text = pegaElem('answer');
    text.innerText = "Escolha uma cor";
}
window.onload = function () {
    circulos();
    criarEvent('paiBall', 'click', certoErrado);
    criarEvent('reset-game', 'click', reset);
}

