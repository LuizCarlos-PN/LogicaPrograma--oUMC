function verificarIdade(){

    let numero = parseInt(document.querySelector('#idade').value)
    let resultado = document.querySelector('#resultado')

    if(isNaN (numero)){
        resultado.innerHTML = ('Insira um valor válido')
    }

    else if(numero >=18){
        resultado.innerHTML = ('Você é maior de idade')
    }
    else{
        resultado.innerHTML = ('você é menor de idade')
    }
    
}


function verificarNumero(){
    
    let numero = parseInt(document.querySelector('#numero').value)
    let resultado = document.querySelector('#resultado')

    if(isNaN (numero)){
        resultado.innerHTML = ('Insira um valor válido')
    }

    else if (numero %2 == 0 ) {
        resultado.innerHTML = ('Número Par')
    }
    else{
        resultado.innerHTML = ('Número ímpar')
    }
    
}







