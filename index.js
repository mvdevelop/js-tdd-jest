
function aplicarDesconto(valor, desconto) {
    if (desconto >= valor) return 0;
    return valor - desconto;
}

function x() {
    return 1 + 1;
}

module.exports = { aplicarDesconto };
