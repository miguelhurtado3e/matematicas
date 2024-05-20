this.nombre = prompt("¡Hola! favor escribe tus nombres y apellidos:")
let puntos = 1
let respuesta

function ejercicio() {
    var años = Math.floor( Math.random() * 10 ) + 2
    var dinero = Math.floor( Math.random() * 1000 ) + 1
    var porcentaje = Math.floor( Math.random() * 10 )
    var decimal = porcentaje/100
    respuesta = Math.floor((dinero*(1+decimal)**años)*100)/100
    

    escribir( contenedor, 'Un banco da de interés el ',`(${porcentaje}`,'% anual. Si depositas $',`(${dinero}`,' ¿Qué monto tendrás al cabo de ',`${años}`,' años?',' Escriba la solución con dos cifras decimales.')
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
