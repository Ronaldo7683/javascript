//Junção dos jogadores 1 e 2. Spread pega os dados dos jogador 1 e 2

const jogador1={nome:'Bruno',energia:100,vidas:3,magia:150}
const jogador2={nome:'Ronaldo',energia:100,vidas:5,velocidade:80}
const jogador3={...jogador1,...jogador2} //Spread

console.log(jogador3)


const soma=(v1,v2,v3,v4)=>{
    return v1+v2+v3+v4
}

let valores=[1,5,4,10]

console.log(soma(...valores))

//Alterei as div da pagina HTML
const objs=[...document.getElementsByTagName('div')]

objs.forEach(element => {
    element.innerHTML='Ronaldo'
})

console.log(objs)


