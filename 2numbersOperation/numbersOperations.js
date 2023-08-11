//  parseFloat: função que converte string em number de ponto flutuante.
//  prompt: permite a interação com o usuário, requerindo a inserção de um valor para atribuir à variável.
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

//teste para verificar se o valores inseridos são do tipo number.
if(isNaN(num1) || isNaN(num2)) {
    console.log("Os valores inseridos não são números válidos.");
}
else {
    const adicao = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;


    console.log(`
    Adição: ${adicao}
    Subtração: ${subtracao}
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao}`
    );
}