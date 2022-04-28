var numero = 1
{
    var numero = 2 //dentro do mesmo escopo sobrescreve
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//fuja do escopo legal  no javascript

//em Javascript a var não considera o escopo de {} como impeditivo de sobrescrição, somente quando funções diversas