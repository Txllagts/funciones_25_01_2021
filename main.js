
function saberLaEdad(fecha_nacimiento, fecha_actual){
    return  fecha_actual - fecha_nacimiento;
}

let data = new Date();
let ano_nacimiento = prompt("ingrese su año de nacimiento");
let anos_cumplidos = saberLaEdad(parseInt(ano_nacimiento), data.getFullYear());
console.log("Total de años cumplidos en el ",data.getFullYear(),anos_cumplidos);