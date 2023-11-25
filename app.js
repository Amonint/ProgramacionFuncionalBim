
const ruta = [
    { rutaID:"001" , ruta: "RUTA QUITO LOJA POR CARCELEN",destino: "Quito", origin:"Loja", distancia: 8000},
    { rutaID:"002", ruta: "RUTA QUITO LOJA POR QUITUMBE",destino: "Guayaquil", origin:"Cuenca", distancia: 8000},

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
  

function buscarPaquete() {
    const idpaqueteBuscado = document.getElementById("idPaquete").value;
    seguimientoPaquete(camiones, paquetes, idpaqueteBuscado);
  }

  // Función para filtrar camiones y mostrar coordenadas de un paquete específico
  function seguimientoPaquete(camiones, paquetes, idpaqueteBuscado) {
    const paqueteEncontrado = paquetes.find(paquete => paquete.idpaquete === parseInt(idpaqueteBuscado));

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = paqueteEncontrado
      ? ((camionAsociado = camiones.find(camion => camion.camionid === paqueteEncontrado.camionid)),
        camionAsociado && camionAsociado.coordenadas
          ? `Coordenadas en tiempo real para el paquete ${idpaqueteBuscado}: ${camionAsociado.coordenadas}`
          : `No se encontraron coordenadas para el paquete ${idpaqueteBuscado}`)
      : `No se encontró ningún paquete con el ID ${idpaqueteBuscado}`;
  }



/* --------------------------------------------------------- */
     // Funciones declaradas globalmente
     function gestionarEntrega(paquete, rutas, camiones) {
        const rutaElegida = rutas.find(
            ruta => ruta.destino === paquete.destino && ruta.origin === paquete.origin
        );

        const listaRutas = document.getElementById('listaRutas');
        listaRutas.innerHTML = '';

        const divItem = document.createElement('div');
        divItem.classList.add('responsive-item');
        divItem.innerHTML = `<strong>Cliente:</strong> ${paquete.Cliente}, 
                            <strong>ID Paquete:</strong> ${paquete.idpaquete}, 
                            <strong>Destino:</strong> ${paquete.destino}, 
                            <strong>Origen:</strong> ${paquete.origin}, 
                            <strong>Estado:</strong> ${paquete.estado}, 
                            <strong>ID Camión:</strong> ${paquete.camionid}, 
                            <strong>Fecha Ingreso:</strong> ${paquete.fechaIngreso} 
                            <br><strong>Ruta asignada:</strong> ${rutaElegida ? rutaElegida.ruta : 'No disponible'}`;

        listaRutas.appendChild(divItem);
    }

    function listarPaquetes(rutas, camiones, paquetes) {
        const listaRutas = document.getElementById('listaRutas');
        listaRutas.innerHTML = '';

        paquetes.forEach(paquete => {
            const rutaElegida = rutas.find(
                ruta => ruta.destino === paquete.destino && ruta.origin === paquete.origin
            );

            const divItem = document.createElement('div');
            divItem.classList.add('responsive-item');

            divItem.innerHTML = `<strong>Cliente:</strong> ${paquete.Cliente}, 
                                <strong>ID Paquete:</strong> ${paquete.idpaquete}, 
                                <strong>Destino:</strong> ${paquete.destino}, 
                                <strong>Origen:</strong> ${paquete.origin}, 
                                <strong>Estado:</strong> ${paquete.estado}, 
                                <strong>ID Camión:</strong> ${paquete.camionid}, 
                                <strong>Fecha Ingreso:</strong> ${paquete.fechaIngreso} 
                                <br><strong>Ruta asignada:</strong> ${rutaElegida ? rutaElegida.ruta : 'No disponible'}`;

            listaRutas.appendChild(divItem);
        });
    }

    function buscarRuta() {
        const idPaquete = document.getElementById('idPaquete').value;
        const paquete = paquetes.find(p => p.idpaquete == idPaquete);

        paquete ? gestionarEntrega(paquete, ruta, camiones) : console.log(`No se encontró un paquete con el ID ${idPaquete}`);
    }

    // Listar todos los paquetes al cargar la página
    listarPaquetes(ruta, camiones, paquetes);

    /* -------------------------------------------------------------------- */


    function calcularEficienciaYTiempo(camiones, rutas) {
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
    }

    // Obtener los resultados del cálculo
    const resultadosCalculo = calcularEficienciaYTiempo(camiones, ruta);

    // Mostrar los resultados en el navegador
    const resultadosEficienciaDiv = document.getElementById('resultadosEficiencia');
    resultadosCalculo.forEach(resultado => {
        const divItem = document.createElement('div');
        divItem.classList.add('resultado-item');
        divItem.innerHTML = `<strong>Camión ID:</strong> ${resultado.camionid}, 
                            <strong>Eficiencia de Combustible:</strong> ${resultado.eficienciaCombustible.toFixed(2)} km/gal, 
                            <strong>Tiempo de Entrega:</strong> ${resultado.tiempoEntrega.toFixed(2)} horas`;
        resultadosEficienciaDiv.appendChild(divItem);
    });

    function clasificarPaquetes(paquetes) {
        return paquetes.map(paquete => ({
            ...paquete,
            ubicacion: paquete.estado === "En inventario" ? "Bodega" :
                        paquete.estado === "En ruta" ? "En ruta" :
                        paquete.estado === "Entregado" ? "Entregado" :
                        "Desconocido"
        }));
    }

    // Mostrar los resultados de la clasificación en el navegador
    const resultadosClasificacionDiv = document.getElementById('resultadosClasificacion');
    const paquetesClasificados = clasificarPaquetes(paquetes);
    paquetesClasificados.forEach(paquete => {
        const divItem = document.createElement('div');
        divItem.classList.add('resultado-item');
        divItem.innerHTML = `<strong>ID Paquete:</strong> ${paquete.idpaquete}, 
                            <strong>Cliente:</strong> ${paquete.Cliente}, 
                            <strong>Estado:</strong> ${paquete.estado}, 
                            <strong>Ubicación:</strong> ${paquete.ubicacion}`;
        resultadosClasificacionDiv.appendChild(divItem);
    });
/* -------------------------------------------------------------------------------- */
    // Función para agregar un nuevo paquete
    function agregarNuevoPaquete() {
        const cliente = document.getElementById('cliente').value;
        const idPaquete = document.getElementById('idPaquete').value;
        const destino = document.getElementById('destino').value;
        const origen = document.getElementById('origen').value;
        const estado = document.getElementById('estado').value;

        // Crear el nuevo paquete
        const nuevoPaquete = {
            Cliente: cliente,
            idpaquete: parseInt(idPaquete),
            destino: destino,
            origin: origen,
            estado: estado,
            fechaIngreso: new Date().getTime() // Fecha actual en milisegundos
        };

        // Agregar el nuevo paquete a la lista
        paquetes.push(nuevoPaquete);

        // Mostrar el resultado actualizado en el navegador
        const divItem = document.createElement('div');
        divItem.classList.add('resultado-item');
        divItem.innerHTML = `<strong>ID Paquete:</strong> ${nuevoPaquete.idpaquete}, 
                            <strong>Cliente:</strong> ${nuevoPaquete.Cliente}, 
                            <strong>Estado:</strong> ${nuevoPaquete.estado}, 
                            <strong>Ubicación:</strong> ${nuevoPaquete.ubicacion}`;
        resultadosClasificacionDiv.appendChild(divItem);
    }