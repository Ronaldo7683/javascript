'use strict'

function teste(){
    let nome='Ronaldo'
    if(true){
        console.log('Dentro do IF do teste: ' + nome)
    }
    console.log('Dentro do teste: ' + nome)
}

teste()

console.log('Fora de teste: + nome') /* Fora do Fuction dar erro, não consegue ler a variavel LET, esse é o modo correto.
Só consegue ler com a variável VAR que pode ser um problema não faz concatenação
Cosnt significa constante a declaração não pode ser auterada*/