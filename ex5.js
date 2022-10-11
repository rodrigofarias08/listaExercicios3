

//5. pedir lista de carros vendidos por mês.
//salvar em um vetor de subvetores onde cada subvetor representa um mês. imprime vetor.

//Entradas:
//Vetor de carros vendidos. Cada subvetor contém os carros vendidos em cada mês de janeiro a dezembro:
let carrosVendidos = [[], [], [], [], [], [], [], [], [], [], [], []]

for (let mes = 0; mes < 12; mes++) {
  while (true) {
    let nomeCarro = prompt(`Digite o nome do próximo carro vendido no mês ${mes + 1}.
        Digite 'fim' para pular para o próximo mês.`)


    console.log(nomeCarro)

    if (nomeCarro.toUpperCase() === 'FIM') {
      break
    } else carrosVendidos[mes].push(nomeCarro)


  }
}

console.log(carrosVendidos)