let nome = "Wilton";
let XP = 5010;
let nivel;

if (XP < 1000) {
    nivel = "Ferro";
} else if (XP >= 1001 && XP < 2001) {
    nivel = "Bronze";
} else if (XP >= 2001 && XP < 5001) {
    nivel = "Prata";
} else if (XP >= 5001 && XP < 7001) {
    nivel = "Ouro"; 
} else if (XP >= 7001 && XP < 8001) {
    nivel = "Platina";
} else if (XP >= 8001 && XP < 9001) {
    nivel = "Ascendente";
} else if (XP >= 9001 && XP < 10001) {
    nivel = "Imortal";
} else if (XP >= 10001) {
    nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);