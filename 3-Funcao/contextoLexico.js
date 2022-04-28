const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
//por conta do contexto lexico a minha função irá achar o valor
//global. Porque quando uma função for declarada dentro do Javascript, ela não tem só o seu conteudo interno, parametros, o que ela retorna, ela tb carrega consigo o contexto onde foi declarada
exec()