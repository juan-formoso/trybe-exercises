let precoDoProduto = 100
let precoDaVenda = 2500

if (precoDoProduto >= 0 && precoDaVenda >= 0) {
    let precoTotalDoProduto = precoDoProduto * 20;
    let lucro = (precoDaVenda - precoTotalDoProduto);
    console.log(lucro)
} else {
    console.log('Erro: valores não podem ser calculados.')
}