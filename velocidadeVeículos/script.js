function compararVelocidades(veiculo1, veiculo2) {
  if (veiculo1.velocidade > veiculo2.velocidade) {
    return `${veiculo1.nome} é mais rápido do que ${veiculo2.nome}.`;
  } else if (veiculo2.velocidade > veiculo1.velocidade) {
    return `${veiculo2.nome} é mais rápido do que ${veiculo1.nome}.`;
  } else {
    return `As velocidades de ${veiculo1.nome} e ${veiculo2.nome} são iguais.`;
  }
}

function preencherDado ( ){
  const nome = prompt("Nome: ")
  const velocidade = parseFloat(prompt("Velocidade: "))
  return {
    nome, velocidade
  }
}

// Solicita informações dos veículos ao usuário
const veiculo1 = preencherDado()
const veiculo2 = preencherDado()

compararVelocidades(veiculo1, veiculo2)
// Compara velocidades e exibir o resultado
const mensagem = compararVelocidades(veiculo1, veiculo2);
console.log(mensagem);