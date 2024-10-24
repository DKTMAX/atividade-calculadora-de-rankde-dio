// function resultado
function finalRanke(vitorias, derrotas){

    // saldo
      let saldoVitorias = vitorias - derrotas; 
       let nivel = "";
    
    // estrutura de decisão
    if (vitorias < 10) {
            nivel = "Ferro";
        } else if (vitorias >= 11 && vitorias <= 20) {
            nivel = "Bronze";
        } else if (vitorias >= 21 && vitorias <= 50) {
            nivel = "Prata";
        } else if (vitorias >= 51 && vitorias <= 80) {
            nivel = "Ouro";
        } else if (vitorias >= 81 && vitorias <= 90) {
            nivel = "Diamante";
        } else if (vitorias >= 91 && vitorias <= 100) {
            nivel = "Lendário";
        } else if (vitorias >= 101) {
            nivel = "Imortal";
        }
    
    
    // saida 
         console.log("O Jogador tem um saldo de " + saldoVitorias + " e esta no nivel " + nivel); 
    }
    
    //// o Jogador DKTMAX possui:
    
    let vitoriasdojogador = 75;
    let derrotasdojogador = 25;
    
    // função
    
    finalRanke(vitoriasdojogador, derrotasdojogador);
    
    
    
    
    
    
    