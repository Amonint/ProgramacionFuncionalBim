const ruta = [
    { rutaID:"001" , ruta: "RUTA QUITO LOJA POR CARCELEN",destino: "Quito", origin:"Loja", distancia: 8000},
    { rutaID:"002", ruta: "RUTA QUITO LOJA POR QUITUMBE",destino: "Quito", origin:"Loja", distancia: 8000},

];
const camiones = [
    { Chofer: "Pablo", camionid:1652531523, cobustibleutilizado:20,distanciaRecorrida:800, coordenadas:"66° 33 9N; 11° 04’ 13’’ E", velocidad:60, rutaID:"001", capacidad:20},
    { Chofer: "Jose", camionid:1652531524, cobustibleutilizado:20,distanciaRecorrida:800, coordenadas:"66° 33 9N; 11° 04’ 13’’ E", velocidad:60, rutaID:"001", capacidad: 20},
];
const paquetes = [
    { Cliente: "Juan", idpaquete: 2768768, destino: "Quito", origin: "Loja", estado: "En ruta", camionid: 1652531523, fechaIngreso: 56 },
    { Cliente: "Maria", idpaquete: 3456789, destino: "Guayaquil", origin: "Cuenca", estado: "En inventario", camionid: 1652531523, fechaIngreso: 67 },
    { Cliente: "Pedro", idpaquete: 9876543, destino: "Manta", origin: "Esmeraldas", estado: "Entregado", camionid: 1652531524, fechaIngreso: 78 },
    { Cliente: "Ana", idpaquete: 5647382, destino: "Ambato", origin: "Ibarra", estado: "En ruta", camionid: 1652531523, fechaIngreso: 89 },
    { Cliente: "Carlos", idpaquete: 1122334, destino: "Riobamba", origin: "Cuenca", estado: "Entregado", camionid: 1652531524, fechaIngreso: 90 },
    { Cliente: "Luisa", idpaquete: 9988776, destino: "Machala", origin: "Loja", estado: "En inventario", camionid: 1652531524, fechaIngreso: 101 },
    { Cliente: "Roberto", idpaquete: 2233445, destino: "Cuenca", origin: "Quito", estado: "En ruta", camionid: 1652531523, fechaIngreso: 112 },
    { Cliente: "Elena", idpaquete: 6677889, destino: "Guayaquil", origin: "Manta", estado: "En inventario", camionid: 1652531523, fechaIngreso: 123 },
    { Cliente: "Diego", idpaquete: 4455667, destino: "Ambato", origin: "Quito", estado: "Entregado", camionid: 1652531523, fechaIngreso: 134 },
    { Cliente: "Gabriela", idpaquete: 1122334, destino: "Esmeraldas", origin: "Riobamba", estado: "En ruta", camionid: 1652531523, fechaIngreso: 145 },
  ];
  

const bodega  = [
    { idpaquete:6786686},
];

const readline = require('readline');

// Crear una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false  // Agregar esta línea
});

// Función para filtrar camiones y mostrar coordenadas de un paquete específico
const seguimientoPaquete = (camiones, paquetes) => {
  // Preguntar por teclado el idpaquete
  rl.question("Ingrese el idpaquete para realizar el seguimiento: ", (idpaqueteBuscado) => {
    // Cerrar la interfaz de lectura
    rl.close();

    // Resto del código
    const paqueteEncontrado = paquetes.find(paquete => paquete.idpaquete === parseInt(idpaqueteBuscado));

    console.log(
      paqueteEncontrado
        ? ((camionAsociado = camiones.find(camion => camion.camionid === paqueteEncontrado.camionid)),
          camionAsociado && camionAsociado.coordenadas
            ? `Coordenadas en tiempo real para el paquete ${idpaqueteBuscado}: ${camionAsociado.coordenadas}`
            : `No se encontraron coordenadas para el paquete ${idpaqueteBuscado}`)
        : `No se encontró ningún paquete con el idpaquete ${idpaqueteBuscado}`
    );
  });
};

// Llamar a la función con los arreglos de camiones y paquetes
seguimientoPaquete(camiones, paquetes);
/* ------------------------------------------------------------------------------------------------------- */

/* 
// Función para gestionar la entrega de paquetes
const gestionarEntrega = (paquete, rutas, camiones) => {
    const rutaElegida = rutas.find(
        ruta => ruta.destino === paquete.destino && ruta.origin === paquete.origin
    );

    console.log(
        rutaElegida
            ? `Paquete ${paquete.idpaquete} asignado a la ruta: ${rutaElegida.ruta}`
            : `No se encontró una ruta válida para el paquete ${paquete.idpaquete}`
    );

    // Actualizar el estado del paquete
    paquete.estado = "Entregado";

    // Realizar cualquier otra acción necesaria, como registrar la entrega o actualizar la información del camión

    console.log(`Paquete ${paquete.idpaquete} entregado con éxito.`);
};

// Llamar a la función con el arreglo de paquetes, rutas y camiones
paquetes.forEach(paquete => gestionarEntrega(paquete, ruta, camiones)); */

/* const asignarCamiones = (camiones, paquetes) => {
    return paquetes.reduce((acumulador, paquete) => {
      const camionDisponible = paquete.estado === "En ruta"
        ? camiones.find(camion => camion.camionid === paquete.camionid && camion.capacidad > 0)
        : null;
  
      camionDisponible
        ? (acumulador.push({ ...paquete, camionid: camionDisponible.camionid }), camionDisponible.capacidad -= 1)
        : acumulador.push(paquete);
  
      return acumulador;
    }, []);
  };
  
  // Ejemplo de uso
  const paquetesAsignados = asignarCamiones(camiones, paquetes);
  
  // Mostrar los resultados
  console.log("Paquetes Asignados:");
  paquetesAsignados.forEach(paquete => {
    console.log(`ID Paquete: ${paquete.idpaquete}, Cliente: ${paquete.Cliente}, Estado: ${paquete.estado}, CamionID: ${paquete.camionid}`);
  });
   */

/* ------------------------------------------------------------------------------------------------ */

// Función para calcular eficiencia de combustible y tiempo de entrega
// Función para calcular eficiencia de combustible y tiempo de entrega
/* const calcularEficienciaYTiempo = (camiones, rutas) => {
    return camiones.map(camion => {
        const rutaAsociada = rutas.find(ruta => ruta.rutaID === camion.rutaID);

        return rutaAsociada
            ? {
                camionid: camion.camionid,
                eficienciaCombustible: rutaAsociada.distancia / camion.cobustibleutilizado,
                tiempoEntrega: rutaAsociada.distancia / camion.velocidad
            }
            : null;
    }).filter(resultado => resultado !== null);
};

// Obtener los resultados del cálculo
const resultadosCalculo = calcularEficienciaYTiempo(camiones, ruta);

// Mostrar los resultados
console.log("Resultados del cálculo de eficiencia y tiempo de entrega:");
resultadosCalculo.forEach(resultado => {
    console.log(`Camión ID: ${resultado.camionid}, Eficiencia de Combustible: ${resultado.eficienciaCombustible.toFixed(2)} km/gal, Tiempo de Entrega: ${resultado.tiempoEntrega.toFixed(2)} horas`);
}); */

/* 
---------------------------------------------------------------------- */

 
  

  /* ------------------------------------------------------------------ */

/*   const agregarPaquete = (paquetes, nuevoPaquete) => {
    return [...paquetes, nuevoPaquete];
  };
  
  // Ejemplo de uso
  const nuevoPaquete = { Cliente: "Nueva Persona", idpaquete: 987654, destino: "Quito", origin: "Guayaquil", estado: "En inventario", camionid: null, fechaIngreso: 150 };
  
  const paquetesActualizados = agregarPaquete(paquetes, nuevoPaquete);
  
  // Mostrar los resultados
  console.log("Paquetes Actualizados:");
  paquetesActualizados.forEach(paquete => {
    console.log(`ID Paquete: ${paquete.idpaquete}, Cliente: ${paquete.Cliente}, Estado: ${paquete.estado}`);
  }); */
  

