function soma(...valores){
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++){
        res+=valores[i]
    }
    return res
}

console.log(soma(10,5,2,8))

//--------------------------------------------------------------------------------------------------------------------

function soma1(...valores1){
    let res1=0
    for(let v of valores1){
        res1+=v
    }
    return res1
}

console.log(soma(10,5,2,8,15))

