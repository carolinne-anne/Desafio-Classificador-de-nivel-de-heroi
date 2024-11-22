let nome = "ANNE";
let xp = 7005;

let nivel;

if (xp < 1000) {
    nivel = "FERRO!";
} else if (xp <= 2000) {
    nivel = "BRONZE!";
} else if (xp <= 5000) {
    nivel = "PRATA!";
} else if (xp <= 7000) {
    nivel = "OURO!";
} else if (xp <= 8000) {
    nivel = "PLATINA!";
} else if (xp <= 9000) {
    nivel = "ASCENDENTE!";
} else if (xp <= 10000) {
    nivel = "IMORTAL!";
} else {
    nivel = "RADIANTE!";
}

const mensagem = (`O Herói de nome ${nome} está no nível ${nivel}`);

console.log(mensagem);

const body = document.querySelector("body");
const paragrafo = document.createElement("p");
paragrafo.textContent = mensagem;
body.appendChild(paragrafo);