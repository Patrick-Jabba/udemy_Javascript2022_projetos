var numero = 1
{
    let numero = 2 //usando let ele procura o mais restrito dentro do escopo, senao existir ela busca fora a mais ampla
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// let tem escopo de bloco ou local, global e função

// var não tem escopo de bloco, mas tem global e função porém por não considerar o escopo de bloco você pode sobrescrever caso use var em escopo de bloco ou local