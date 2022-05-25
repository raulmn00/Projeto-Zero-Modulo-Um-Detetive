const prompt = require("prompt-sync")();
let pergunta1 = prompt("Você conhecia a vítima? (S/N)");
let pergunta2 = prompt("Você não estava na sua casa no dia do crime? (S/N)");
let pergunta3 = prompt("Você e a vítima estudaram juntos? (S/N)");
let pergunta4 = prompt("Você costuma beber no MacLarren Pub's? (S/N)");
let pergunta5 = prompt("Você já praticou tiro esportivo? (S/N)");
let qtdRespostasAfirmativas = 0;

if (pergunta1 == "s" || pergunta1 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta2 == "s" || pergunta2 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta3 == "s" || pergunta3 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta4 == "s" || pergunta4 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta5 == "s" || pergunta5 == "S") {
  qtdRespostasAfirmativas += 1;
}

if (qtdRespostasAfirmativas >= 4) {
  console.log("Você é o culpado! Você tem o direito a um advogado e tudo que disser pode e será usado contra você no tribunal! Se entregue pacificamente!");
} else if (qtdRespostasAfirmativas == 3) {
  console.log("Você é suspeito! Teremos que mantê-lo em custódia!");
} else {
  console.log("Você é inocente, não se preocupe!");
}
