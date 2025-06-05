class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  exibirInfo() {
    return `"${this.titulo}" por ${this.autor}, publicado em ${this.ano}`;
  }
}

let biblioteca = [];

function adicionarLivro(titulo, autor, ano) {
  const novoLivro = new Livro(titulo, autor, ano);
  biblioteca.push(novoLivro);
  console.log("Livro adicionado com sucesso.");
}

function buscarLivro(tituloBusca) {
  const livroEncontrado = biblioteca.find(livro => livro.titulo.toLowerCase() === tituloBusca.toLowerCase());
  if (livroEncontrado) {
    console.log("Livro encontrado:");
    console.log(livroEncontrado.exibirInfo());
  } else {
    console.log("Livro não encontrado.");
  }
}

function listarLivros() {
  if (biblioteca.length === 0) {
    console.log("Nenhum livro cadastrado.");
  } else {
    console.log("Lista de livros:");
    for (let livro of biblioteca) {
      console.log(livro.exibirInfo());
    }
  }
}

function calcularMediaIdade() {
  if (biblioteca.length === 0) {
    console.log("Nenhum livro para calcular média.");
    return;
  }
  const anoAtual = new Date().getFullYear();
  const somaIdades = biblioteca.reduce((soma, livro) => soma + (anoAtual - livro.ano), 0);
  const media = somaIdades / biblioteca.length;
  console.log(`Média de idade dos livros: ${media.toFixed(2)} anos`);
}

while (true) {
  let acao = prompt("Escolha uma ação: adicionar, buscar, listar, media ou sair").toLowerCase();
  if (acao === "sair") break;

  if (acao === "adicionar") {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let ano = parseInt(prompt("Digite o ano de publicação:"));
    adicionarLivro(titulo, autor, ano);
  } else if (acao === "buscar") {
    let tituloBusca = prompt("Digite o título do livro a ser buscado:");
    buscarLivro(tituloBusca);
  } else if (acao === "listar") {
    listarLivros();
  } else if (acao === "media") {
    calcularMediaIdade();
  } else {
    console.log("Ação inválida.");
  }
}
