{
    {
        {
            {
                var sera = 'Será???' //embora pareça que esta dentro do bloco ela estará visível também fora do bloco // em outras linguagens isso estaria visível apenas dentro desse bloco mas em Js não, a variável VAR var também fica visível fora do bloco
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)