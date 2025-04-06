# Desafio Cartão de Crédito - DIO

## Descrição do Projeto
Este projeto identifica a bandeira de um cartão de crédito com base no número digitado pelo usuário. Ele utiliza expressões regulares para verificar os padrões específicos de cada bandeira e retorna o nome da bandeira correspondente ou informa que a bandeira é desconhecida.

## Como Funciona
1. O programa solicita ao usuário que digite o número do cartão de crédito no terminal.
2. O número digitado é processado por uma função chamada `identificarBandeira`, que verifica os primeiros dígitos do cartão e os compara com padrões predefinidos (regex) para cada bandeira.
3. As bandeiras suportadas incluem:
   - **Visa**: Começa com o número `4`.
   - **Mastercard**: Começa com os números `51-55` ou `2221-2720`.
   - **American Express (Amex)**: Começa com `34` ou `37`.
   - **Diners Club**: Começa com `300-305`, `36` ou `38`.
   - **Discover**: Começa com `6011` ou `65`.
   - **JCB**: Começa com `2131`, `1800` ou `35`.
   - **Elo**: Possui faixas específicas como `4011`, `5067`, entre outras.
4. Após identificar a bandeira, o programa exibe o resultado no terminal.
5. Caso o número não corresponda a nenhuma bandeira conhecida, o programa retorna "Bandeira desconhecida".

## Como Executar
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório e navegue até o diretório do projeto.
3. Execute o programa com o comando:
   ```bash
   node index.js

   *Obs: Todo o código foi criado com ajuda do github Copilot no ambiente virtual do codespaces do proprio github*