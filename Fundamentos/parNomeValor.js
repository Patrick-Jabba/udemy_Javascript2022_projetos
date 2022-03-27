// par nome/valor

const saudacao = 'Opa' //contexto léxico local físico ao qual foi definido o par nome/valor MAIS ABRANGENTE

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2 MAIS RESTRITO
    return saudacao
}



//Objetos são grupos aninhandos de pares nome/valor
const cliente = {
    nome: 'Pedro', 
    idade: 32, 
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)