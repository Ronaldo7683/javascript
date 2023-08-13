let horas = 20;

if (horas < 12) { // Exemplo 1 simples 
    console.log("Bom Dia!");
}else {
    console.log("Boa Tarde!");
} 

if (horas < 12) { // Exemplo 2 Condição mais especifica.
    console.log("Bom Dia!");
}else if (horas < 17) {
    console.log("Boa Tarde!");
}

if (horas < 12) { // Exemplo 3 Condição mais especifica.
    console.log("Bom Dia!");
}else if (horas < 18) {
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite!")
}

if (horas < 12) {  // Exemplo 4 Condição mais especifica.
    console.log("Agora é Dia!");
}else if (horas < 18) {
    console.log("Agora é Tarde!");
} else if (horas < 21) {
    console.log("Agora é Tardezinha!")
} else {
    console.log("Agora é Noite!")
}