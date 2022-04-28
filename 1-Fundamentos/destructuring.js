const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log('Ola ' + nome, idade)

const {nome: n, idade: i} = pessoa
console.log('Ola ' + nome, idade)

const {sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) 

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//quando voce tentar desustruturar um dado aninhado, voce tem que ter certeza que o caminho ate o dado está livre / de fato settado