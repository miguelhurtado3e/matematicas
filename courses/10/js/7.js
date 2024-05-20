this.nombre = prompt("¡Hola! favor escribe tus nombres y apellidos:")
let puntos = 1
let respuesta

function ejercicio() {
    var constante = Math.floor( Math.random() * 10 ) + 2
    var denomidador = Math.floor( Math.random() * 10 ) + 1
    
    respuesta = Math.floor(200/constante)/100

    escribir( contenedor, 'Halle el periodo de la función: ',`(f(x)=\\cfrac{sen(${constante} \\pi x)}{${denomidador}}`)
}

ejercicio()


btnEvaluar.onclick = e => {
    e.preventDefault()

    const soluciones = [respuesta] //Vector de respuestas

    if (puntos<20) {
        if ( calificar("idRespuesta", soluciones) ) {
            puntos++
            alert(`Tienes ${puntos} puntos`)
        } else {
            alert(`Tienes ${puntos} puntos y la solución es ${respuesta}`)
            if (puntos > 0) {
                puntos--
            }
        }
    } else {
        alert(`¡Felicitaciones ${nombre}! terminaste el ejercicio, envía un pantallazo por Edmodo. Gracias.`)
    }          
        
    ejercicio()
    
}
