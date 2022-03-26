let preco = 19.90;
let desconto = 0.4;

console.log(preco - (preco * desconto) );
console.log(preco * (1 - desconto));
console.log(19.9 * 0.6);

let precoComDesconto = preco * (1 - desconto)
console.log(precoComDesconto);

let nome = "Caderno"; // String (Texto) -> sequencia de símbolos
let categoria = "Papelaria";
console.log("Produto: " 
    + nome 
    + ", Categoria: " 
    + categoria + ", Preço: " + preco + ", Desconto: " + precoComDesconto);
