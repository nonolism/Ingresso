function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd');
    let itemDeComparacao = document.getElementById(`qtd-${tipoIngresso}`);
    let quantidadeItemDeComparacao = parseInt(itemDeComparacao.innerText);

    if (quantidadeItemDeComparacao > 0){
        if (quantidadeItemDeComparacao >= quantidade.value){
            if (quantidade.value >= 0){
            itemDeComparacao.innerText = quantidadeItemDeComparacao - quantidade.value;
            } else {
                alert('Quantidade solicitada invalida, insira um valor positivo');
            }
        } else {
            alert(`Quantidade inválida, selecione uma quantidade menor ou igual a ${quantidadeItemDeComparacao}`);
            quantidade.value = '';
        }
    } else {
        alert('Quantidade de ingressos para essa posição esgotados');
    }
}