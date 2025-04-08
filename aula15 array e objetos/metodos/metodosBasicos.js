//Array
let nomesLindos =['Luiz','Carlos','Cunha','Oliveira']

//Acessar um item do array
console.log(nomesLindos[0]);

//Verificar o tamanho da array
console.log(nomesLindos.length)

//Adicionar um item no array
nomesLindos.push('Carlão')
console.log(nomesLindos)

//Adicionar um item no inicio do array
nomesLindos.unshift('Dazerface')
console.log(nomesLindos)

//Removendo um indice no começo do array
nomesLindos.shift()
console.log(nomesLindos)

//Removendo um item no fim da array
nomesLindos.pop()
console.log(nomesLindos)

//Verificar a posição de um item
console.log(nomesLindos.indexOf('Oliveira'))


//Metodo Splice
// - Adicionar
// - Remover
// - Modificar

//Remover um item a partir de uma posição
//array.splice(posição, quantidadeDeItensRemovidos)
nomesLindos.splice(1,1)
console.log(nomesLindos)

//Remover um item a partir de um valor
nomesLindos.splice(nomesLindos.indexOf('Oliveira'),1)
console.log(nomesLindos)

//Adicionando itens dentro de um array
nomesLindos.splice(0,0,'Shadow','Zé da Manga','Nal do Canal')
console.log(nomesLindos)

//MOdificando itens de uma array
nomesLindos.splice(3,2,'Luizinho','Bacuira')
console.log(nomesLindos)

//Percorrer um array
console.log('Maiores Nomes Mundiais')
let i = 0;

nomesLindos.forEach((nome) => {
    i++
    console.log(i, '-', nome);

})