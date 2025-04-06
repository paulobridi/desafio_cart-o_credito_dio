const readline = require('readline');

function identificarBandeira(numeroCartao) {
    const bandeiras = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/, // Exemplo: 4111111111111111
        mastercard: /^(5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/, // Faixas: 51-55, 2221-2720
        amex: /^3[47][0-9]{2}/, // Faixas: 34, 37
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{2}/, // Faixas: 300-305, 36, 38
        discover: /^6(?:011|5[0-9]{2})/, // Faixas: 6011, 65
        jcb: /^(?:2131|1800|35\d{2})/, // Faixas: 2131, 1800, 35
        elo: /^(4011(78|79)|431274|438935|451416|457393|504175|5067[0-6]|509[0-9]{2}|627780|636297|636368|6504[0-9]{2}|6505[0-9]{2}|6507[0-9]{2}|6509[0-9]{2}|6516[0-9]{2}|6550[0-9]{2})/, // Faixas específicas do Elo
        american_express: /^3[47][0-9]{2}/ // Faixas: 34, 37
    };

    for (const [bandeira, regex] of Object.entries(bandeiras)) {
        if (regex.test(numeroCartao)) {
            return bandeira;
        }
    }

    return 'Bandeira desconhecida';
}

// Configurando o readline para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número do cartão de crédito: ', (numeroCartao) => {
    const bandeira = identificarBandeira(numeroCartao);
    console.log(`A bandeira do cartão é: ${bandeira}`);
    rl.close();
});