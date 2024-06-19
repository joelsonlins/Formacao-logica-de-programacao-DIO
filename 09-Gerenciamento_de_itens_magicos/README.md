# Desafio de Código: Gerenciamento de Itens Mágicos 🧙‍♂️🔮🗡️🏹

🟧⬜⬜ Básico &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟠 Princípios Básicos

## Descrição
Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

<b>Tarefa</b>: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

## Entrada
Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

## Saída
Imprima o tipo do item, o dano, a resistência e o dano em combate.

Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois <code>this.dano * 2</code> e quando não for arma, é retornado no dano <code>this.dano</code>.

## Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.


<table>
   <tr>
        <th>
      Entrada
        </th>
        <th>
       Saida
        </th>
    </tr>
    <tr>
        <td>
        Espada <br>
        200<br>
        300
        </td>
        <td>
        Tipo: Espada<br>
        Dano: 200<br>
        Resistencia: 300<br>
        Dano em combate: 200
        </td>
    </tr>
    <tr>
        <td>
        Cajado<br>
        600<br>
        800
        </td>
        <td>
        Tipo: Cajado<br>
        Dano: 600<br>
        Resistencia: 800<br>
        Dano em combate: 600
        </td>
    </tr>
    <tr>
        <td>
        Arco<br>
        900<br>
        500
        </td>
        <td>
        Tipo: Arco<br>
        Dano: 900<br>
        Resistencia: 500<br>
        Dano em combate: 900
        </tr>

</table>
