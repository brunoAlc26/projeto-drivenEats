let pratoPrincpSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

let valorPratoPrincipal = 0;
let valorBebida = 0;
let valorSobremesa = 0;

function selecionarComida(pratoPrincipal){
    const botao = document.querySelector("." + pratoPrincipal);
    const botaoSelecionadoAntes = document.querySelector(".prato_principal .selecionado");
    if(botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    pratoPrincpSelecionado = pratoPrincipal;
    
    const valor = botao.querySelector(".texto_descricao_valor").textContent;
    valorPratoPrincipal = parseFloat(valor.replace('R$', '').replace(',', '.'));
    pedidosSelecionados();
    somaTotal();

    const nomePrato = botao.querySelector(".texto_descricao_principal").textContent;
    document.getElementById('nomePrato').textContent = nomePrato;
    document.getElementById('valorPrato').textContent = valor;
}

function selecionarBebida(bebida){
    const botao = document.querySelector("." + bebida);
    const botaoSelecionadoAntes = document.querySelector(".bebida .selecionado");
    if(botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    bebidaSelecionada = bebida;

    const valor = botao.querySelector(".texto_descricao_valor").textContent;
    valorBebida = parseFloat(valor.replace('R$', '').replace(',', '.'));
    pedidosSelecionados();
    somaTotal();

    const nomeBebida = botao.querySelector(".texto_descricao_principal").textContent;
    document.getElementById('nomeBebida').textContent = nomeBebida;
    document.getElementById('valorBebida').textContent = valor;
}

function selecionarSobremesa(sobremesa){
    const botao = document.querySelector("." + sobremesa);
    const botaoSelecionadoAntes = document.querySelector(".sobremesa .selecionado");
    if(botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    sobremesaSelecionada = sobremesa;

    const valor = botao.querySelector(".texto_descricao_valor").textContent;
    valorSobremesa = parseFloat(valor.replace('R$', '').replace(',', '.'));
    pedidosSelecionados();
    somaTotal();

    const nomeSobremesa = botao.querySelector(".texto_descricao_principal").textContent;
    document.getElementById('nomeSobremesa').textContent = nomeSobremesa;
    document.getElementById('valorSobremesa').textContent = valor;
}

function pedidosSelecionados() {
    const botaoConfirmar = document.getElementById('botaoConfirmar');
    if (pratoPrincpSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        botaoConfirmar.classList.add('ativo');
        botaoConfirmar.innerHTML = "Confirmar Pedido";
    } else {
        botaoConfirmar.classList.remove('ativo');
        botaoConfirmar.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
}

function janelaConfirmarPedido(){
    if(pratoPrincpSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null){
        const confirmarPedido = document.querySelector(".confirmarPedido");
        confirmarPedido.classList.remove("escondido");
        const conteudo = document.querySelector(".conteudo");
        borrarFundo.classList.add("borrar")
    }
}

function cancelarConfirmacao(){
    const fecharJanelaPedido = document.querySelector(".confirmarPedido");
    fecharJanelaPedido.classList.add("escondido");
    const conteudo = document.querySelector(".conteudo");
    conteudo.classList.remove("borrar");
}

function somaTotal(){
    const valorTotal = valorPratoPrincipal + valorBebida + valorSobremesa;
    document.getElementById('valorTotal').textContent = "R$ " + valorTotal.toFixed(2);
}

function pedir(){
    const urlBase = "https://wa.me/5581991376178/?text=" // Meu número de telefone

    const nomePrato = document.getElementById('nomePrato').textContent;
    const nomeBebida = document.getElementById('nomeBebida').textContent;
    const nomeSobremesa = document.getElementById('nomeSobremesa').textContent;
    const valorTotal = document.getElementById('valorTotal').textContent;

    const pedido = `Pedido: \n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\n Total: ${valorTotal}`;
    const urlFinal = urlBase + encodeURIComponent(pedido);

    alert("Seu pedido sera redirecionado para o nosso Whatsapp! =)")

    window.open(urlFinal, '_blank');
}

