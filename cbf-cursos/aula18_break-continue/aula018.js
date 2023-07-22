//Break
let n=0
let max=1000

while(n<max){
    console.log('Ronaldo - ' + n)
    if(n>10){
        break
    }
    n++
}

console.log('Fim do programa')


let n1=0
let max1=1000
let pares=0

for(let i=n1;i<max1;i++){
    console.log('Ronaldo - ' + i)
    if(i%2==0){
        pares++
    }
} 


console.log('Quantidadede pares: ' + pares)
console.log('Fim do programa')


//Continue
let n2=0
let max2=1000
let pares1=0

for(let i=n2;i<max2;i++){
    if(i%2!=0){
        continue
    }
    pares1++
}

console.log('Quantidadede de pares: ' + pares1)
console.log('Fim do programa')


