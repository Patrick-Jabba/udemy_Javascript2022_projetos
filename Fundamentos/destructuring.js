const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
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

const { conta: {ag, num} } = pessoa
console.log(ag, num)