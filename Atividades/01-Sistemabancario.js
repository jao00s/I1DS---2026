/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/ let nome = "jaozin";
let banco = "NGcash";
let agencia = 2444;
let conta = 67;
let saldo = 6767.67;
console.log("*****************", banco, "************************");
console.log("Nome do cliente:", nome);
console.log("agência:", agencia, "| Conta:", conta);
console.log("Saldo: R$", saldo);
console.log("*************************************************");

//Efetuando e imprimindo movimentações
console.log("pix recebido por, Professor Gustavo Castello: R$ 500,00");
saldo = saldo + 500;
console.log("Novo saldo é de R$", saldo);

console.log("pix enviado para Professor Cris De Paula: R$ 250,00");
saldo = saldo - 250;
console.log("Novo saldo é de R$", saldo);

console.log("pix recebido por, Milton Garcia: R$ 367,00");
saldo = saldo + 367;
console.log("Novo saldo é de R$", saldo);

console.log("pix enviado para, Mucal: R$ 6,00");
saldo = saldo - 6;
console.log("Novo saldo é de R$", saldo);

console.log("pix recebido por, Primo: R$ 1,00");
saldo = saldo + 1;
console.log("Novo saldo é de R$", saldo);

console.log("*****************", banco, "************************");
console.log("Nome do cliente:", nome);
console.log("agência:", agencia, "| Conta:", conta);
console.log("Saldo: R$", saldo);
console.log("*************************************************");