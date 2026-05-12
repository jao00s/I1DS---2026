let userCount = 0;

const cadastrar = (event) => {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (!nome || !email) return;

    let lista = document.getElementById('lista');

    let novoItem = document.createElement('li');

    let span = document.createElement('span');
    span.innerText = nome + " - " + email;
    novoItem.appendChild(span);

    // Botão Editar
    
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Editar';
    editBtn.onclick = () => editUser(novoItem);
    novoItem.appendChild(editBtn);

    // Botão Deletar
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Deletar';
    deleteBtn.onclick = () => deleteUser(novoItem);
    novoItem.appendChild(deleteBtn);

    lista.appendChild(novoItem);

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';

    userCount++;
    document.getElementById('userCount').innerText = userCount;
};

const editUser = (li) => {
    let span = li.querySelector('span');
    let text = span.innerText;

    let [nome, email] = text.split(' - ');

    let newNome = prompt('Novo nome:', nome);
    let newEmail = prompt('Novo email:', email);

    if (newNome && newEmail) {
        span.innerText = newNome.trim() + " - " + newEmail.trim();
    }
};

const deleteUser = (li) => {
    li.remove();
    userCount--;
    document.getElementById('userCount').innerText = userCount;
};



let produtos = [];
let totalGeral = 0;

function adicionarProduto() {
  const nome = document.getElementById("produto").value;
  const quantidade = parseFloat(document.getElementById("quantidade").value);
  const valor = parseFloat(document.getElementById("valor").value);

  if (!nome || quantidade <= 0 || valor <= 0) {
    alert("Preencha os campos corretamente!");
    return;
  }

  const total = quantidade * valor;

  produtos.push({
    nome,
    quantidade,
    valor,
    total,
  });

  atualizarTabela();
  limparCampos();
}

function atualizarTabela() {
  const tbody = document.querySelector("#tabelaProdutos tbody");

  tbody.innerHTML = "";

  totalGeral = 0;

  produtos.forEach((produto, index) => {
    totalGeral += produto.total;

    const linha = `
      <tr>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>R$ ${produto.valor.toFixed(2)}</td>
        <td>R$ ${produto.total.toFixed(2)}</td>
      </tr>
    `;

    tbody.innerHTML += linha;
  });

  document.getElementById("total").textContent =
    totalGeral.toFixed(2);

  document.getElementById("valorLiquido").textContent =
    totalGeral.toFixed(2);
}

function aplicarDesconto() {
  const descontoValor = parseFloat(
    document.getElementById("descontoValor").value
  ) || 0;

  const descontoPercentual = parseFloat(
    document.getElementById("descontoPercentual").value
  ) || 0;

  let valorLiquido = totalGeral;

  if (descontoValor > 0) {
    valorLiquido -= descontoValor;
  }

  if (descontoPercentual > 0) {
    valorLiquido -= totalGeral * (descontoPercentual / 100);
  }

  if (valorLiquido < 0) {
    valorLiquido = 0;
  }

  document.getElementById("valorLiquido").textContent =
    valorLiquido.toFixed(2);
}

function finalizarCompra() {
  if (produtos.length === 0) {
    alert("Nenhum produto adicionado!");
    return;
  }

  alert("Compra finalizada com sucesso!");

  produtos = [];
  totalGeral = 0;

  atualizarTabela();

  document.getElementById("descontoValor").value = "";
  document.getElementById("descontoPercentual").value = "";
}

function limparCampos() {
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";

  document.getElementById("produto").focus();
}


let produtos = [];
let totalGeral = 0;

const adicionarProduto = () => {
  let nome = document.getElementById("produto").value;
  let qtd = parseInt(document.getElementById("quantidade").value);
  let valor = parseFloat(document.getElementById("valor").value);

  if (!nome || !qtd || !valor) {
    alert("Preencha todos os campos");
    return;
  }
  let total = qtd * valor;

  //totalGeral += total;

  produtos.push({
    nome,
    qtd,
    valor,
    total,
  });
  atualizarTabela();
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";
};

const atualizarTabela = () => {
  let tbody = document.querySelector("#tabelaProdutos tbody");
  tbody.innerHTML = "";
  produtos.forEach((item) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.qtd}</td>
        <td>${item.valor.toFixed(2)}</td>
        <td>${item.total.toFixed(2)}</td>
      </tr>
    `;
  });
};

const finalizarCompra = () => {
  totalGeral = 0;
  produtos.forEach((item) => {
    totalGeral += item.total;
  });
  document.getElementById("total").innerText = totalGeral.toFixed(2);
  document.getElementById("valorLiquido").innerText = totalGeral.toFixed(2);
};
const aplicarDesconto = () => {
  let descontoValor =
    parseFloat(document.getElementById("descontoValor").value) || 0;

    let descontoPercentual =
    parseFloat(document.getElementById("descontoPercentual").value) || 0;
  let valorFinal = totalGeral;
  if (descontoValor > 0) {
    valorFinal -= descontoValor;
  }
  if (descontoPercentual > 0) {
    valorFinal -= totalGeral * (descontoPercentual / 100);
  }
  document.getElementById("valorLiquido").innerText = valorFinal.toFixed(2);
};

