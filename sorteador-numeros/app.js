function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let resultado = document.getElementById("resultado");
  let inputAte = document.getElementById("ate");

  let sorteados = [];
  let numero;

  inputAte.classList.remove("input-erro");

  if (de >= ate || quantidade > ate - de + 1) {
    void inputAte.offsetWidth;
    inputAte.classList.add("input-erro");
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
  }

  if (de > ate) {
    document.getElementById("erro-ate").style.display = "block";
    return;
  }

  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  // 1. Controle do Botão Reiniciar (Começa desabilitado no HTML)
  let botao = document.getElementById("btn-reiniciar");

  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
    botao.disabled = false; // Libera o clique
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
    botao.disabled = true; // Trava o clique
  }

  // 2. Controle do Botão Sortear (Começa HABILITADO no HTML)
  let botaoSortear = document.getElementById("btn-sortear");

  if (botaoSortear.classList.contains("container__botao")) {
    botaoSortear.classList.remove("container__botao");
    botaoSortear.classList.add("container__botao-desabilitado");
    botaoSortear.disabled = true; // Trava o clique para não buggar o jogo
  } else {
    botaoSortear.classList.remove("container__botao-desabilitado");
    botaoSortear.classList.add("container__botao");
    botaoSortear.disabled = false; // Libera o clique de volta
  }
}

function reiniciar() {
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  document.getElementById("ate").classList.remove("input-erro");

  alterarStatusBotao();
}
