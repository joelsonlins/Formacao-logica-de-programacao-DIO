const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o número de vitórias: ', (vitorias) => {
    rl.question('Informe o número de derrotas: ', (derrotas) => {
        vitorias = parseInt(vitorias, 10);
        derrotas = parseInt(derrotas, 10);
        
        function saldo(vitorias, derrotas) {
            return vitorias - derrotas;
        }

        let calc = saldo(vitorias, derrotas);

        function ranqueada(calc) {
            let rank;
            if (calc <= 10) {
                rank = "Ferro";
            } else if (calc > 10 && calc <= 20) {
                rank = "Bronze";
            } else if (calc > 21 && calc <= 50) {
                rank = "Prata";
            } else if (calc > 51 && calc <= 80) {
                rank = "Ouro";
            } else if (calc > 81 && calc <= 90) {
                rank = "Diamante";
            } else if (calc > 91 && calc <= 100) {
                rank = "Lendário";
            } else {
                rank = "Imortal";
            }
            return rank;
        }

        let rank = ranqueada(calc);

        console.log(`O Herói tem saldo de ${calc} e está no nível de ${rank}`);

        rl.close();
    });
});
