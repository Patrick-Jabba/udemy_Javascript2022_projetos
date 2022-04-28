console.log(typeof console)
console.log(Math.ceil(6.1))
console.log(Math.floor(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //tb seria válido
console.log(obj1.nome)

function Obj(nome){  //COM THIS CRIO ATRIBUTOS
    this.nome = nome //se eu usasse var ao invés de this ficaria visível só dentro do escopo não ficaria visível fora do escopo, mas usando this se torna público
    this.exec = function(){ //COM THIS CRIO FUNÇÕES
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

