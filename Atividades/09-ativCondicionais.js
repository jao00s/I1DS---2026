//                         PARTE 1




let nome = "joaozin";
let idade = 16;
let cidade = "jaú";

console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade + ".");

let num1 = 10;
let num2 = 3;

console.log("Soma: " + (num1 + num2));
console.log("Subtração: " + (num1 - num2));
console.log("Multiplicação: " + (num1 * num2));
console.log("Divisão: " + (num1 / num2));
console.log("Resto da divisão: " + (num1 % num2));


let base = 10;
let altura = 5;

let area = base * altura;

console.log("A área do retângulo é: " + area);


let comprimento = 10;
let largura = 5;
let alturas = 3;

let volume = comprimento * largura * alturas;

console.log("Comprimento: " + comprimento);
console.log("Largura: " + largura);
console.log("Altura: " + alturas);

console.log("Volume do paralelepípedo: " + volume);


let preco = 100;

let desconto = preco * 0.10;
let valorFinal = preco - desconto;

console.log("Preço original: " + preco);
console.log("Desconto (10%): " + desconto);
console.log("Valor final: " + valorFinal);


let celsius = 25;

let fahrenheit = (celsius * 9/5) + 32;

console.log("Temperatura em Celsius: " + celsius);
console.log("Temperatura em Fahrenheit: " + fahrenheit);


let peso = 70;   // em kg
let altura1 = 1.75; // em metros

let imc = peso / (altura1 * altura);

console.log("Peso: " + peso);
console.log("Altura: " + altura1);
console.log("IMC: " + imc);



let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Nota 1: " + nota1);
console.log("Nota 2: " + nota2);
console.log("Nota 3: " + nota3);
console.log("Média: " + media);



let a = 2;
let b = 6;
let c = 4;

let delta = (b * b) - (4 * a * c);

console.log("Valor de a: " + a);
console.log("Valor de b: " + b);
console.log("Valor de c: " + c);
console.log("Delta (Δ): " + delta);



let horas = 2;

let minutos = horas * 60;
let segundos = horas * 3600;

console.log("Horas: " + horas);
console.log("Minutos: " + minutos);
console.log("Segundos: " + segundos);


/****************************************************** 
                     PARTE2                            */
                     
let num = -5;
if (num > 0) console.log("Positivo");
else if (num < 0) console.log("Negativo");
else console.log("Zero");


if (num % 2 === 0) console.log("Par");
else console.log("Ímpar");


if (num % 3 === 0) console.log("Múltiplo de 3");


let nota = 6;
if (nota >= 7) console.log("Aprovado");
else if (nota >= 5) console.log("Recuperação");
else console.log("Reprovado");


let idadePessoa = 20;
if (idadePessoa >= 18 && idadePessoa <= 70) console.log("Voto obrigatório");
else if (idadePessoa >= 16) console.log("Voto opcional");
else console.log("Não pode votar");


if (num >= 10 && num <= 50) console.log("Está entre 10 e 50");


let user = "admin";
let senha = "1234";
if (user === "admin" && senha === "1234") console.log("Login OK");
else console.log("Erro");


let x = 10, y = 20;
console.log("Maior:", x > y ? x : y);


let p = 10, q = 20, r = 5;
let maior = p;
if (q > maior) maior = q;
if (r > maior) maior = r;
console.log("Maior:", maior);


let idadeClass = 30;
if (idadeClass <= 12) console.log("Criança");
else if (idadeClass <= 17) console.log("Adolescente");
else if (idadeClass <= 59) console.log("Adulto");
else console.log("Idoso\n");

//                             PARTE 3

let dia = 3;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
}
console.log("--------------------------------");


let mes = 5;
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 5:
    console.log("Maio");
    break;
  // completar conforme necessário
}
console.log("--------------------------------");


switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("1º trimestre");
    break;
  case 4:
  case 5:
  case 6:
    console.log("2º trimestre");
    break;
}
console.log("--------------------------------");


let opcao = 1;
let nA = 10,
  nB = 5;
switch (opcao) {
  case 1:
    console.log(nA + nB);
    break;
  case 2:
    console.log(nA - nB);
    break;
  case 3:
    console.log(nA * nB);
    break;
  case 4:
    console.log(nA / nB);
    break;
}
console.log("--------------------------------");


switch (nota) {
  case "A":
  case "a":
    console.log("Excelente");
    break;

  case "B":
  case "b":
    console.log("Bom");
    break;

  case "C":
  case "c":
    console.log("Regular");
    break;

  case "D":
  case "d":
    console.log("Ruim");
    break;

  default:
    console.log("Nota inválida!");
    break;

}

// parte 4

for(let i=1;i<=100;i++) console.log(i);


for(let i=100;i>=1;i--) console.log(i);


for(let i=1;i<=50;i++){
    if(i%2===0) console.log(i);
}


for(let i=1;i<=50;i++){
    if(i%2!==0) console.log(i);
}


let soma=0;
for(let i=1;i<=100;i++) soma+=i;
console.log(soma);


let f=5, fat=1;
for(let i=1;i<=f;i++) fat*=i;
console.log(fat);


let tab=5;
for(let i=1;i<=10;i++){
    console.log(`${tab} x ${i} = ${tab*i}`);
}


let cont=0;
for(let i=1;i<=100;i++){
    if(i%2===0) cont++;
}
console.log(cont);


for(let i=0;i<=100;i++){
    if(i%5===0) console.log(i);
}


for(let i=1;i<=5;i++){
    let linha="";
    for(let j=1;j<=i;j++){
        linha += "*";
    }
    console.log(linha);
}

//                           PARTE 5


let numeros1 = [5, 12, 8, 3, 20, 7, 9, 14, 2, 10];

// Exibir elementos do vetor
for (let i = 0; i < numeros1.length; i++) {
  console.log(numeros1[i]);
}


let valores = [5, 12, 8, 3, 20, 7, 9, 14, 2, 10];

let resultado = 0;

for (let i = 0; i < valores.length; i++) {
  resultado += valores[i];
}

console.log("Soma dos elementos do vetor: " + resultado);



let numerosLista = [5, 12, 8, 3, 20, 7, 9, 14, 2, 10];

let somaTotal = 0;

for (let i = 0; i < numerosLista.length; i++) {
  somaTotal += numerosLista[i];
}

let mediaFinal = somaTotal / numerosLista.length;

console.log("Soma: " + somaTotal);
console.log("Média do vetor: " + mediaFinal);


let numerosArray = [5, 12, 8, 3, 20, 7, 9, 14, 2, 10];

let maiorNumero = numerosArray[0];

for (let i = 0; i < numerosArray.length; i++) {
  if (numerosArray[i] > maiorNumero) {
    maiorNumero = numerosArray[i];
  }
}

console.log("Maior valor do vetor: " + maiorNumero);

let listaValores = [5, 12, 8, 3, 20, 7, 9, 14, 2, 10];

let menorValorEncontrado = listaValores[0];

for (let i = 0; i < listaValores.length; i++) {
  if (listaValores[i] < menorValorEncontrado) {
    menorValorEncontrado = listaValores[i];
  }
}

console.log("Menor valor do vetor: " + menorValorEncontrado);


let listaValoress = [5, 12, 8, 3, 20, 7, 9, 14, 2, 10];

let pares = 0;
let impares = 0;

for (let i = 0; i < listaValoress.length; i++) {
  if (listaValoress[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Quantidade de pares: " + pares);
console.log("Quantidade de ímpares: " + impares);


let listaValoresss = [5, 12, 8, 3, 20, 7, 9, 14, 2, 10];

for (let i = 0; i < listaValoresss.length; i++) {
  listaValoresss[i] = listaValoresss[i] * 2;
}

console.log("Vetor após multiplicar por 2:");

for (let i = 0; i < listaValoresss.length; i++) {
  console.log(listaValoresss[i]);
}

// parte 6 
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// 43
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matriz[i][j]);
    }
}

// 44
for (let i = 0; i < 3; i++) console.log(matriz[i][i]);

// 45
for (let i = 0; i < 3; i++) console.log(matriz[i][2 - i]);

// 46
let somaM = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) somaM += matriz[i][j];
}
console.log("Soma:", somaM);

// 47
let maiorM = matriz[0][0];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (matriz[i][j] > maiorM) maiorM = matriz[i][j];
    }
}
console.log("Maior:", maiorM);

// 48
let X = 2;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) matriz[i][j] *= X;
}
console.log(matriz);

// 49
let count = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (matriz[i][j] > 10) count++;
    }
}
console.log("Maiores que 10:", count);

// 50
for (let i = 0; i < 3; i++) {
    let linha = "[ ";
    for (let j = 0; j < 3; j++) {
        linha += matriz[i][j] + " ";
    }
    linha += "]";
    console.log(linha);
}