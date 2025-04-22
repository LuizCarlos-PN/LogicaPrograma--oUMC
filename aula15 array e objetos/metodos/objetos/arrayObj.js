let produtos =[
    {nome: 'teclado', categoria: 'Periferico', preco: 200},
    {nome: 'Mouse', categoria: 'Periferico', preco: 150},
    {nome: 'Computador', categoria: 'Eletrônico', preco: 5000},
    {nome: 'Monitor', categoria: 'Eletrônico', preco: 750}
]

//lista de produtos
//percorrer uma array com objeos
produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
})

// Fazer calculos dentro de uma array
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0)
console.log(`O valor total de todos os produtos é R$ ${total}`);

//Ofertando desconto MAP
const produtosComDesconto = produtos.map( produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}))

console.log(produtosComDesconto);

//Filtrando itens
// desafio desconto 
const produtosEletronicos1 = produtos.filter(produtos => produtos.categoria === 'Periferico' )
console.log(produtosEletronicos1);

const descontoEletronicos1 = produtos.map( produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.95, 
    categoria: produto.categoria 
    
}));
console.log(descontoEletronicos1);


const produtosEletronicos2 = produtos.filter(produtos => produtos.categoria === 'Eletrônico' )
console.log(produtosEletronicos2); 

const descontoEletronicos2 = produtos.map( produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9,
    categoria: produto.categoria 

}));
console.log(descontoEletronicos2);

const somaProdutosEletronicosDesconto = descontoEletronicos2.reduce((soma, produto) => soma + produto.preco,0)
console.log(somaProdutosEletronicosDesconto);


const somaProdutosPerifericosDesconto = descontoEletronicos1.reduce((soma, produto) => soma + produto.preco,0)
console.log(somaProdutosPerifericosDesconto);