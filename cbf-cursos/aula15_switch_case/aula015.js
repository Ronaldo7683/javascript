//Estrutura Switch Case
let colocao=3

switch(colocao){
    case 1:
        console.log('Primeiro Lugar')
        break
    case 2:
        console.log('Segundo Lugar')
    case 3:
        console.log('Terceiro Lugar')
        break
    case 4: case 5: case 6:
        console.log('Premio de participação')
        break 
    default:
        console.log('Não subiu ao podio')
}