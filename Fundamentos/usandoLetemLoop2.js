const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]() //diferente do comportamento do var o let tem memoria do valor no momento que o indice "i" passa na casa "n"