//Simples só IF

let num=11

if(num > 10)
    console.log('Numero maior que 10')
console.log('Fim do programa')

//Com IF e ELSE
let num1=6.5

if(num1 >= 7){
console.log('Aprovado')
}else{
console.log('Reprovado')
}


let num2=5

if(num2 > 10){
    console.log('Numeral maior quer 10')
}else if(num2 > 5){
    console.log('Numeral esta entre 6 e 10')
}else{
    console.log('Numero menor ou igual a 5')
}


let num3=50

if(num3 > 10){
    console.log('Numeral maior quer 10')
    if(num3 > 50){
        console.log('Numero maior que 50')
    }
}else if(num3 > 5){
    console.log('Numeral esta entre 6 e 10')
}else{
    console.log('Numero menor ou igual a 5')
}

//Exempro END e OR 
let energia=70
let clima='sol'

if(energia => 70 && clima=='sol'){
    console.log('Vou a praia')
}else{
    console.log('Vou ao cinema')
}