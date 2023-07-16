/* 
Operadores Lógicos
&& -> END (e)
|| -> OR (ou)
!  -> NOT (não)

AND           OR
V V V         V V V
V F F         V F V
F V F         F V V
F F F         F F F

AND           1 1 1
1 1 1         1 0 1
1 0 0         0 1 1
0 1 0         0 1 1
0 0 0         0 0 0
*/

let n1,n2,n3,n4
n1=10
n2=5
n3=15
n4=2

console.log((n1>n2)&&(n1>n4))
console.log(!((n1>n2)&&(n1>n4)))

if(n2>n3){
    console.log(n2 + ' maior que ' + n3)
}else{
    console.log(n2 + ' menor que ' + n3)
}

