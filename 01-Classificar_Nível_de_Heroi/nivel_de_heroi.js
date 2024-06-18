const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do seu Herói: ', (nome_heroi) => {
    rl.question('Digite a pontuação do rank do seu Herói: ', (exp_heroi) => {
        exp_heroi = parseInt(exp_heroi, 10);
        let rank;

        switch (true) {
            case (exp_heroi <= 1000):
                rank = "Ferro";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            case (exp_heroi > 1000 && exp_heroi <= 2000):
                rank = "Bronze";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            case (exp_heroi > 2000 && exp_heroi <= 5000):
                rank = "Prata";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            case (exp_heroi > 5000 && exp_heroi <= 7000):
                rank = "Ouro";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            case (exp_heroi > 7000 && exp_heroi <= 8000):
                rank = "Platina";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            case (exp_heroi > 8000 && exp_heroi <= 9000):
                rank = "Ascendente";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            case (exp_heroi > 9000 && exp_heroi <= 10000):
                rank = "Imortal";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            case (exp_heroi > 10000):
                rank = "Radiante";
                console.log("O Herói de nome " + nome_heroi + " está no nível de " + rank);
                break;
            default:
                console.log("Dados incorreto");

                break;
        }
        rl.close();
    });
});
