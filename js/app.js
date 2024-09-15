//permitir que o usuário compre uma quantidade n de ingressos do tipo selecionado
//subtrair do total, a quantidade que foi comprada
//caso seja selecionado uma quantidade maior que o total, não comprar e enviar um alerta ao usuário
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