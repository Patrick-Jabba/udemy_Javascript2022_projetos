class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }//nao preciso acessar a variavel nome usando o this porque esse objeto tem ciencia do contexto lexico, isto é, dentro dessa função e tem acesso a escopo mais abrangente
}

const p2 = criarPessoa('João')
p2.falar()