// Criando variaveis do tipo array (Vetor)

var dinos = [
  "Tiranossauro Rex",
  "estegonossauro",
  "Brontossauro",
  "Tricerátops",
];

// Imprimindo os dados em forma de linha
console.log(dinos);
// Imprimindo os dados em forma de tabelas
console.table(dinos);

// lenght -> "tamanho" do Array (quantidade de elementos)
console.log("o vetor tem", dinos.length, "elementos");

// Imprimir elemento apartir do indicie
console.log(dinos[2]);

// push -> adiciona um novo elemento no final da fila 
dinos.push("anquilossauro");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
dinos.unshift("velociraptor");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// obter um elemento a partir do indice
console.log("1ª posição", dinos[0]);
console.log("4ª posição", dinos[3]);
console.log("20ª posição", dinos[20])
