let listaPaquetes = [];

/* Paquetes */
const objPaquetes = {
    cliente: '',
    idPaquete: '',
    destino: '',
    origen:'',
    estado:'',
    camionid:'',
    fechaIngreso:'',
}

let editando = false;
/* Entrada por teclado navegador */
const formulario = document.querySelector('#formulario');
const clienteInput = document.querySelector('#cliente');
const idPaqueteInput = document.querySelector('#idPaquete');
const destinoInput = document.querySelector('#destino');
const origenInput = document.querySelector('#origen');
const estadoInput = document.querySelector('#estado');
const camionidInput = document.querySelector('#camionid');
const fechaIngresoInput = document.querySelector('#fechaIngreso');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    const camposLlenos = clienteInput.value !== '' && idPaqueteInput.value !== '' && destinoInput.value !== '' && origenInput.value !== '' && estadoInput.value !== '' && camionidInput.value !== '' && fechaIngresoInput.value !== '';

    camposLlenos
        ? (editando ? (editarPaquete(), editando = false) : (objPaquetes.idPaquete = Date.now(), objPaquetes.cliente = clienteInput.value, objPaquetes.idPaquete = idPaqueteInput.value, objPaquetes.destino = destinoInput.value, objPaquetes.origen = origenInput.value, objPaquetes.estado = estadoInput.value, objPaquetes.camionid = camionidInput.value, objPaquetes.fechaIngreso = fechaIngresoInput.value, agregarPaquete()))
        : alert('Todos los campos se deben llenar');
}


function agregarPaquete() {
    listaPaquetes.push({...objPaquetes});

    mostrarPaquetes();

    formulario.reset();
    limpiarObjeto();
}


function limpiarObjetoPaquete() {
    objPaquetes.cliente = '';
    objPaquetes.idPaquete = '';
    objPaquetes.destino = '';
    objPaquetes.origen = '';
    objPaquetes.estado = '';
    objPaquetes.camionid = '';
    objPaquetes.fechaIngreso = '';
}

function mostrarPaquetes() {
    limpiarHTML();

    const divPaquetes = document.querySelector('.div-paquetes');
    
    listaPaquetes.forEach(paquete => {
        const {idPaquete, cliente, destino, origen, estado, camionid, fechaIngreso} = paquete;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${idPaquete} - Cliente: ${cliente} - Destino: ${destino} - Origen: ${origen} - Estado: ${estado} - Camion ID: ${camionid} - Fecha Ingreso: ${fechaIngreso} - `;
        parrafo.dataset.idPaquete = idPaquete;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarPaquete(paquete);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarPaquete(idPaquete);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divPaquetes.appendChild(parrafo);
        divPaquetes.appendChild(hr);
    });
}


function cargarPaquete(paquete) {
    const {idPaquete, cliente, destino, origen, estado, camionid, fechaIngreso} = paquete;

    clienteInput.value = cliente;
    idPaqueteInput.value = idPaquete;
    destinoInput.value = destino;
    origenInput.value = origen;
    estadoInput.value = estado;
    camionidInput.value = camionid;
    fechaIngresoInput.value = fechaIngreso;

    objPaquetes.idPaquete = idPaquete;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}


function editarPaquete() {
    objPaquetes.cliente = clienteInput.value;
    objPaquetes.idPaquete = idPaqueteInput.value;
    objPaquetes.destino = destinoInput.value;
    objPaquetes.origen = origenInput.value;
    objPaquetes.estado = estadoInput.value;
    objPaquetes.camionid = camionidInput.value;
    objPaquetes.fechaIngreso = fechaIngresoInput.value;

    listaPaquetes.forEach(paquete => (
        paquete.idPaquete === objPaquetes.idPaquete
            ? ((paquete.idPaquete = objPaquetes.idPaquete),
               (paquete.cliente = objPaquetes.cliente),
               (paquete.destino = objPaquetes.destino),
               (paquete.origen = objPaquetes.origen),
               (paquete.estado = objPaquetes.estado),
               (paquete.camionid = objPaquetes.camionid),
               (paquete.fechaIngreso = objPaquetes.fechaIngreso))
            : null
    ));

    limpiarHTML();
    mostrarPaquetes();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}


function eliminarPaquete(idPaquete) {
    listaPaquetes = listaPaquetes.filter(paquete => paquete.idPaquete !== idPaquete);

    limpiarHTML();
    mostrarPaquetes();
}

function limpiarHTML() {
    const divPaquetes = document.querySelector('.div-paquetes');
    divPaquetes.innerHTML = '';
}
