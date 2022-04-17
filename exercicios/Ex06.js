// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    resultado = capitalInicial * taxaJuros * tempoAplicacao
    console.log("O valor dos juros da aplicação é de R$" + resultado + " e o montante a ser resgatado é de R$" + (resultado + capitalInicial))
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    montante = capitalInicial * ((1 + taxaJuros) ** tempoAplicacao)
    montante = capitalInicial + montante
    resultadoJurosCompostos = montante - capitalInicial
    
    resolucao = `O valor dos juros da aplicação é de R$ ${resultadoJurosCompostos.toFixed(2) + ' e o montante a ser resgatado é de R$' + montante.toFixed(2)}`
    console.log(resolucao)
}

jurosSimples(1200, 0.02, 14)

jurosCompostos(1200, 0.02, 14)

//jurosCompostos(1200, 0.02, 14)