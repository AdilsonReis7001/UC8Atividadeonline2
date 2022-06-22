let dataEvento = 20;
let dataAtual = 15;
let idadePartic = 19;

let palestCadast = 8
let particCadast = 93


if (dataEvento > dataAtual) {
    console.log("Cadastro permitido.");
}else {
    console.log("O cadastro não será permitido por data inválida.");
}

if (idadePartic >= 18 ) {    
    console.log("Cadastro permitido.");
}else {
    console.log("O cadastro não será permitido pela idade.");
}

for (let palestrante = 0; palestrante <= palestCadast; palestrante++) {
    console.log(" Palestrante nº:" + palestrante);        
}

for (let participante = 0; participante <= particCadast; participante++) {
    console.log(" Participante nº:" + participante);        
}

if ((palestCadast + particCadast) <= 100) {
    console.log("Cadastro permitido");
      
}else { console.log("Cadastro não será permitido por ter excedido o limite."); 

} 