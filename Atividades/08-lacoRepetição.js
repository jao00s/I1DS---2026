//dado um vetor, calcule e exiba a quantidade de pares e de impares

let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let par = 0;
let impar = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) par++;
  else impar++;
}
console.log("quantidade de pares:", par);
console.log("quantidade de impares:", impar);

console.log("---------------------------------------------------")

// dado o vetor, multiplique todos seus elementos por 3 
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}

console.table(numeros);

// dada uma matriz 2x3, imprima todos os sesus elementos com as respectativas poições
let matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table([matriz])

for(let linha = 0; linha < matriz.length; linha++)
  for(let coluna = 0; coluna < matriz[0].length;coluna++)
console.log("Matriz[", linha, ",", coluna, "] = ", matriz[linha][coluna]);
  



