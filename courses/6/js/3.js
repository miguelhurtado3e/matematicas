var nombre = prompt("¡Hola! favor escribe tus nombres y apellidos:")
var suma
var puntos = 0
var nombres = ['Miguel', 'Sara', 'David', 'Cecilia', 'Ángel', 'Liliana', 'Ana', 'Lady', 'María', 'Silvestre']
var objetos = ['colombinas', 'marcadores', 'cuadernos', 'lápices', 'colores', 'libros', 'borradores', 'tajalápiz', 'micropuntas', 'esferos']

function generarEjercicio() {
    var a = Math.floor( Math.random() * 100 )
    var b = Math.floor( Math.random() * 100 )

    contEjercicio.innerHTML = `$$  ${a} +  ${b} = $$`

    suma = a + b
}

function generarProblema() {
    var a = Math.floor( Math.random() * 100 )
    var b = Math.floor( Math.random() * 100 )
    var Aleatorio1 = Math.floor( Math.random() * 10 )
    var Aleatorio2 = Math.floor( Math.random() * 10 )
    var nom1Aleatorio = nombres[Aleatorio1]
    var nom2Aleatorio = nombres[Aleatorio2]
    var objAleatorio = objetos[Aleatorio1]

    contEjercicio.innerHTML = `${nom1Aleatorio} tiene ${a} ${objAleatorio} y ${nom2Aleatorio} tiene ${b} ${objAleatorio}. ¿Cuántos ${objAleatorio} reúnen en total?`

    suma = a + b
}

generarEjercicio()

btnEvaluar.addEventListener("click", calificar)

function calificar(e, limite=2) {
    e.preventDefault()

    if (contRespuesta.value) {
        if (puntos < limite) {
            contEjercicio.style.display = "none"
            inRespuesta.style.display = "none"
            contPuntos.style.display = ""
            respuesta.style.display = ""

            setTimeout(()=>{
                contEjercicio.style.display = ""
                inRespuesta.style.display = ""
                contPuntos.style.display = "none"
                respuesta.style.display = "none"
            }, 3000)

            if ( contRespuesta.value == suma ){
                respuesta.innerHTML = "Bien"
                contPuntos.innerHTML = `Puntos ${++puntos}`

                if ( puntos == limite ) {
                    alert(`¡Felicitaciones ${nombre}!, favor toma un pantallazo ANTES de Aceptar, y luego envialo por Edmodo. Ejercicio realizado: Suma de Naturales.`)
                    puntos = 0
                }
            } else {
                respuesta.innerHTML = `Solución ${suma}`

                if (puntos > 0){
                    puntos--
                }

                contPuntos.innerHTML = `Puntos ${puntos}`
            }
            
            if (puntos<limite/2){
                generarEjercicio()
                MathJax.typeset()    
            } else {
                generarProblema()
                MathJax.typeset()    
            }            
        }
    }
}