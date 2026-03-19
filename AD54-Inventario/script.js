//Primero ponemos un array que contenga los servers que tengamos cada server es un objeto dentro del array
let servers = [
    {
        nombreHost: "Chano",
        direccionIP: "192.168.1.1",
        sistemaOperativo: "Ubuntu Server"
    },
    {
        nombreHost: "Luis",
        direccionIP: "192.168.2.1",
        sistemaOperativo: "Windows Server 2022"
    },
    {
        nombreHost: "Jose",
        direccionIP: "192.168.3.1",
        sistemaOperativo: "Ubuntu Server"
    },
    {
        nombreHost: "Abdel",
        direccionIP: "192.168.4.1",
        sistemaOperativo: "Windows Server 2025"
    }
];

//En este apartado estamos añadiendo los mensajes que nos saldrá al iniciar la página web para almacenar los datos del contacto que se quiera almacenar
let nombreNuevo = prompt("Introduzca su nombre de Host:");
let ipNueva = prompt("Introduzaca su dirección IP:");
let nuevoSistema = prompt("Introduzca su Sistema Operativo:");

//Con esto creamos el nuevo objeto de servers
let nuevoObjeto = {
    nombreHost: nombreNuevo,
    direccionIP: ipNueva,
    sistemaOperativo: nuevoSistema
};

//Esto lo que hace es agregarlo a la lista
servers.push(nuevoObjeto);

//En este apartado se pondrá para mostrar todo por consola y para mostrar el segundo contacto le pondremos el valor 1
console.log("2º Server");
console.log(servers[1].nombreHost, "/", servers[1].direccionIP, "/", servers[1].sistemaOperativo);

