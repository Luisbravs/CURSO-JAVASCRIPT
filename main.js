let sinAlcohol = ["*Daiquiri de frutilla", "*Shirley Temple", "*Laguna azul Electric", "*Mojito"];
let ConAlcohol = ["#Fernet con coca", "#Gancia", "#Mojito clasico", "#Daiquiri de Frutilla", "#Sex and the beach", "#Molotov", "#Pantera rosa", "#The barbados surprise"];
const nosotros = ["Nuestro compromiso va más allá de simplemente servir tragos; nos esforzamos por ofrecer una atención excepcional, asegurándonos de que cada sorbo sea una experiencia única."];
let lista1 = 3000;
let lista2 = 2000;
let capacidad = 120;

while (true) {
    let Nombre = prompt("Hola, ingrese su nombre para continuar");
    alert(`Hola ${Nombre}, Bienvenido a Momo-Bar`);
    let indice = prompt("Presione 1# Tragos sin alcohol, 2# Tragos con alcohol, 3#¿Quiénes somos?, 4# Salir");

    switch (indice) {
        case "1":
            alert(`COCTELES SIN ALCOHOL:  ${sinAlcohol}`);
            break;
        case "2":
            alert(`COCTELES CON ALCOHOL:  ${ConAlcohol}`);
            break;
        case "3":
            alert(nosotros);
            break;
        default:
            alert("Gracias por su visita");
            break;
    }

    let preguntaUno = prompt("¿Pedir presupuesto para tu fiesta? ").toLowerCase();
     if (preguntaUno === "si") {
        alert("Con gusto!")
    }
     else {
        alert("Gracias por visitar Momo - Bar. ¡Hasta la próxima!");
        break;
    }

    let list = prompt("Presione 1# para con alcohol, 2# para sin alcohol");
    switch (list) {
        case "1":
            let invitados = prompt("Ingrese la cantidad de invitados");
            if (invitados <= capacidad) {
                lista1 *= invitados;
                alert(`El costo del servicio es: $${lista1}. ¡Gracias por su visita!`);}
            else {
                alert("Disculpe, la cantidad ingresada excede la capacidad del servicio. La cantidad no debe ser mayor a 120 personas. ¡Gracias por su visita!");
            }
            break;

        case "2":
            let personas = prompt("Ingrese la cantidad de invitados");
            if (personas <= capacidad) {
                lista2 *= personas;
                alert(`El costo del servicio es: $${lista2}. ¡Gracias por su visita!`);} 
            else {
                alert("Disculpe, la cantidad ingresada excede la capacidad del servicio. La cantidad no debe ser mayor a 120 personas. ¡Gracias por su visita!");
            }
            break;
    }
}
