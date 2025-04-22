let produto ={
     //chave: 'valor',
     nome: 'notebook',
     preco: 3500,
     emEstoque: true

}

//Exibir as informações
console.log(produto);

//Exibir os valores
console.log(produto.nome);
console.log(produto.preco);

//Exibir as chaves
console.log(produto['nome']); //Notebook
console.log(produto['preco']); //3500

//Adicionar itens 
produto.fabricante = 'Dell'
//produto['fabricante'] = Dell
console.log(produto)

//Remover itens
delete produto.emEstoque
// produto['emEstoque']
