const nome = "Silvana";
const sexo = "M";
const idade = 50;
const contribuicao = 40;

const regra = idade+contribuicao;

console.log(`Sexo: ${sexo}; Contribuição: ${contribuicao}; Regra: ${regra}`);

if (sexo == "F" && contribuicao >=30 && regra >= 85) {
    console.log(`${nome}, você pode aposentar.`);
    
} else {
    if (sexo == "M" && contribuicao >= 35 && regra >= 95 ) {
        console.log(`${nome}, você pode aposentar.`);
        
    } else {
        console.log(`${nome}, você não pode se aposentar.`);
        
    }
    
}

