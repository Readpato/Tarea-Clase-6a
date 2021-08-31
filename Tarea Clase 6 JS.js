/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonCalculoIntegrantesFamiliares = document.querySelector('#botonCalculoIntegrantes');

$botonCalculoIntegrantesFamiliares.onclick = function (){
    const $cantidadIntegrantesTotales = Number(document.querySelector('#cantidadIntegrantesFamiliares').value);
    const $edadesIntegrantesFamiliares = document.querySelector('#edadesIntegrantesFamiliares');
    
    for (let i = 0 ; i < $cantidadIntegrantesTotales ; i++) {
        const $labelIntegrante = document.createElement('label');
        $labelIntegrante.textContent = `Edad Integrante Familiar ${i+1} `;
        $edadesIntegrantesFamiliares.appendChild($labelIntegrante);
        
        const $casillaEdad = document.createElement('input');
        $casillaEdad.type = 'text';
        $casillaEdad.placeholder = 'Ingresa la edad de un integrante';
        $casillaEdad.class = 'edadIntegrantes';
        $edadesIntegrantesFamiliares.appendChild($casillaEdad);
        
    }

    return false;
}




