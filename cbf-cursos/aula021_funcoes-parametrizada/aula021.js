function soma(p1){//()Declaração da função
    console.log(p1)
}

soma('Ronaldo') //()chamada da função
soma(2023)
soma(5.2)

//----------------------------------------------------------------------------------------------------------

function soma1(n1,n2){
    console.log(n1+n2)
}

soma1(10,5)

//----------------------------------------------------------------------------------------------------------

function soma2(n1=0,n2=2){
    console.log(n1+n2)
}

soma2(10)

//----------------------------------------------------------------------------------------------------------

function soma3(n1=0,n2=0){
    let res
    res=n1+n2
    return res
}

let resultado_soma=soma3(5,5)
console.log(resultado_soma)

//----------------------------------------------------------------------------------------------------------

const VALOR_PADRAO=10

function soma4(n1=VALOR_PADRAO,n2=VALOR_PADRAO){
    let res1
    res1=n1+n2
    return res1
}

let resultado_soma1=soma4(58)
console.log(resultado_soma1)

//----------------------------------------------------------------------------------------------------------


function add(v){
    return valor+v //Também funciona sem retorno exemplo:(valor+=v)
}

let valor=0
console.log(valor)

valor=add(10)
console.log(valor)

valor=add(5)
console.log(valor)
    

//----------------------------------------------------------------------------------------------------------