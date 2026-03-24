//                             "PARTE 4

// 26
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 27
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

// 28
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 29
for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 30
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma = soma + i;
}
console.log(soma);

// 31
let n = Number(prompt());
let f = 1;
for (let i = 1; i <= n; i++) {
    f = f * i;
}
console.log(f);

// 32
let num = Number(prompt());
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// 33
let cont = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        cont = cont + 1;
    }
}
console.log(cont);

// 34
for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}

// 35
let linha = "";
for (let i = 1; i <= 5; i++) {
    linha = linha + "*";
    console.log(linha);
}