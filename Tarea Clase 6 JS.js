/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonCalculoIntegrantesFamiliares = document.querySelector('#botonCalculoIntegrantes');
const $botonCalculoEdadesIntegrantes = document.querySelector('#botonCalculoEdadesIntegrantes');
let arrayEdadesIntegrantesTotales;

function crearCasillerosEdades(cantidadDeIntegrantesFamiliares) {
    const $cantidadIntegrantesTotales = Number(document.querySelector('#cantidadIntegrantesFamiliares').value);
    const $formularioEdadesIntegrantesFamiliares = document.querySelector('#formularioEdadesIntegrantesFamiliares');

    for (let i = 0 ; i < $cantidadIntegrantesTotales ; i++) {
        const $nuevoElementoDiv = document.createElement('div');
        $formularioEdadesIntegrantesFamiliares.appendChild($nuevoElementoDiv);
        
        const $labelIntegrante = document.createElement('label');
        $labelIntegrante.textContent = `Edad Integrante Familiar ${i+1} `;
        $nuevoElementoDiv.appendChild($labelIntegrante);

        const $casillaEdad = document.createElement('input');
        $casillaEdad.type = 'text';
        $casillaEdad.placeholder = 'Ingresa la edad de un integrante';
        $casillaEdad.id = 'edadIntegrantesFamiliares';
        $casillaEdad.style.width = '15%';
        $nuevoElementoDiv.appendChild($casillaEdad);

        const $botonCalculoEdades = document.createElement('button');
        $botonCalculoEdades.id = 'botonCalcularEdades'
    }
}

function crearArrayEdades() {
    const $edadIntegrantesFamiliares = document.querySelectorAll('#edadIntegrantesFamiliares');
    const arrayEdadesIntegrantes = [];

    for ( let m = 0; m < $edadIntegrantesFamiliares.length ; m++) {
        arrayEdadesIntegrantes.push(Number($edadIntegrantesFamiliares[m].value));
    }
    return arrayEdadesIntegrantesTotales = arrayEdadesIntegrantes;
} 


function calcularEdadMayor(edadesIntegrantes) {
    const $edadMayorIntegrantes = document.querySelector('#edadMayorIntegrantes');
    return $edadMayorIntegrantes.value = `La edad mayor de los integrantes es ${Math.max(...arrayEdadesIntegrantesTotales)}`;
}

function calcularEdadMenor(edadesIntegrantes) {
    const $edadMenorIntegrantes = document.querySelector('#edadMenorIntegrantes');
    return $edadMenorIntegrantes.value = `La edad menor de los integrantes es ${Math.min(...arrayEdadesIntegrantesTotales)}`;
}

function calcularPromedioEdades(edadesIntegrantes) {  
    const $promedioEdadIntegrantes = document.querySelector('#promedioEdadIntegrantes');
    
    let totalEdades = 0;
    
    for (let z = 0 ; z < arrayEdadesIntegrantesTotales.length; z++ ) {
        totalEdades = totalEdades + arrayEdadesIntegrantesTotales[z];
    }
    
    let promedioTotalEdades = totalEdades / arrayEdadesIntegrantesTotales.length;
    return $promedioEdadIntegrantes.value = `El promedio de la edad de los integrantes es ${promedioTotalEdades}`; 
}

$botonCalculoIntegrantesFamiliares.onclick = function (){ 
     return crearCasillerosEdades();
}

$botonCalculoEdadesIntegrantes.onclick = function () {
    crearArrayEdades();
    calcularEdadMayor();
    calcularEdadMenor();
    calcularPromedioEdades();
}


