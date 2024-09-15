function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value
    let quantidade = document.getElementById('qtd').value;
    let itemDeComparacao = document.getElementById(`qtd-${tipoIngresso}`);
    let quantidadeItemDeComparacao = parseInt(itemDeComparacao.innerText)

    if (quantidadeItemDeComparacao > quantidade){
        itemDeComparacao.innerText = quantidadeItemDeComparacao - quantidade;
    } else {
        alert(`Quantidade inválida, selecione uma quantidade menor ou igual a ${quantidadeItemDeComparacao}`);
    }
}