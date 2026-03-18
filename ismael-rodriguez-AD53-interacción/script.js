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

//En este apartado estamos añadiendo los mensajes que nos saldrá al iniciar la página web para almacenar los datos del contacto que se quiera almacenar
let nombreNuevo = prompt("Introduzca su nombre:");
let telefonoNuevo = prompt("Introduzaca su teléfono:");
let emailNuevo = prompt("Introduzca su email:");

//Con esto creamos el nuevo objeto de contactos
let nuevoContacto = {
    nombre: nombreNuevo,
    telefono: telefonoNuevo,
    email: emailNuevo
};

//Esto lo que hace es agregarlo a la lista
contactos.push(nuevoContacto);

//En este apartado se pondrá para mostrar todo por consola y para mostrar el último se utiliza una pequeña variable que son length -1
let ultimo = contactos.length - 1;
console.log("1º Contacto");
console.log(contactos[0].nombre, "/", contactos[0].telefono, "/", contactos[0].email);

console.log("Último contacto");
console.log(contactos[ultimo].nombre, "/", contactos[ultimo].telefono, "/", contactos[ultimo].email);

contactos[1].telefono = "777-777-777";