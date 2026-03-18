//Primero ponemos un array que contenga los contactos que tengamos cada contacto es un objeto dentro del array
let contactos = [
    {
        nombre: "Maxwell Wright",
        telefono: "(0191)7196495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        nombre: "Raja Villarreal",
        telefono: "08663982895",
        email: "posuere.vulputate@SVGFEDropShadowElement.com"
    },
    {
        nombre: "Helen Richards",
        telefono: "08001111",
        email: "libero@convallis.edu"
    }
];
//Ponemos en pantalla las opciones del menú y con ello recogeremos una variable para el switch
let opcion = parseInt(prompt(`Elige una opción del menú
                    1.Mostrar el primer contacto
                    2.Mostrar el último contacto
                    3.Crear un nuevo contacto`));

//En el switch pondremos todas las opciones que puede realizar un usuario
switch (opcion) {
// En el caso de elegir 1 verifica si hay un contacto o no, mostrará el primer contacto y en caso de que no exista un contacto nos pondrá un mensaje de error
    case 1:

        if (contactos.length > 0) {
            console.log("Primer contacto:");
            console.log(contactos[0].nombre, "/", contactos[0].telefono, "/", contactos[0].email);
        } else {
            console.log("Error: la lista de contactos está vacía");
        }
        break
// En el caso de elegir 2 verifica también si hay un contacto o no, mostrará el último contacto y en casi de que no exista un contacto nos pondrá un mensaje de error
    case 2:

        if (contactos.length > 0) {
            let ultimo = contactos.length - 1;
            console.log("Último contacto");
            console.log(contactos[ultimo].nombre, "/", contactos[ultimo].telefono, "/", contactos[ultimo].email);
        } else {
            console.log("Error: la lista de contactos está vacía");
        }
        break
// EN el caso 3 pediremos por pantalla los datos de un nuevo contacto para añadirlo y de paso se muestre el último que se ha puesto y se ha puesto que ninguno de los tres campos pueda ser nulo
    case 3:
        let nombreNuevo = prompt("Introduzca su nombre:");
        let telefonoNuevo = prompt("Introduzca su teléfono:");
        let emailNuevo = prompt("Introduzca su email:");
        if (nombreNuevo && telefonoNuevo && emailNuevo ) {
            contactos.push ({
                nombre: nombreNuevo,
                telefono: telefonoNuevo,
                email : emailNuevo
            });
            let ultimo = contactos.length - 1;
            console.log("Último contacto");
            console.log(contactos[ultimo].nombre, "/", contactos[ultimo].telefono, "/", contactos[ultimo].email);
        } else {
            console.log("Tienes que rellenar los datos para que se añadan")
        }
        break
//Default es para indicar que en caso de elegir un número que no esté disponible en el menú nos saque directamente
    default:
        opcion = "Ponga una opción válida"
        break;
}
console.log(opcion)




