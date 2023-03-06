const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveisNaTela(valortotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valortotal) {
  elementoComValorTotalDeLivrosDisponiveis.innterHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}
