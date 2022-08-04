const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre o mundo da programação funcional e o mundo da programação orientada à objeto conflito entre paradigmas: funcional e OO ou Orientada a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

