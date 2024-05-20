this.nombre = prompt("¡Hola! favor escribe tus nombres y apellidos:")
let puntos = 0
let respuesta

function ejercicio() {
    var p = Math.floor( Math.random() * 10 ) % 5 + 1
    var Xo = Math.floor( Math.random() * 10 ) % 3 + 1
    var Yo = Xo**p
    respuesta = p*Xo**(p-1)

    escribir( contenedor, 'Halle la pendiente de la recta tangente que pasa por el punto ',`((${Xo},${Yo})`,' de la gráfica dada por la función ',`(f(x)=x^${p}` )
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
            if (puntos>0) {
                puntos--
            }
        }
    } else {
        alert(`¡Felicitaciones ${nombre}! terminaste el ejercicio, envía un pantallazo por Edmodo. Gracias.`)
    }          
        
    ejercicio()
}