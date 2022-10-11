

//4. pedir a quantidade de nº e pedir esse nºs ao usuário.
//salvar em um vetor e imprimir.


//Entradas:
let quantidadeNumeros = Number(prompt("Digite a quantidade de números que deseja salvar:"))
let numeros = []


for (let i = 1; i <= quantidadeNumeros; i++) {

  numeros[i - 1] = Number(prompt(`Digite o número ${i}: `))
  //numeros.push(Number(prompt(`Digite o número ${i}: `)))

  console.log(numeros[i - 1])

}

console.log(numeros)