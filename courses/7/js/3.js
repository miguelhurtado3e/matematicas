class Ejercicio {
    constructor(btn, inNum, inDen, outFrac1, outFrac2, nomb1, nomb2, comid) {
        this.inNum = inNum
        this.inDen = inDen
        this.outFrac1 = outFrac1
        this.outFrac2 = outFrac2
        this.nomb1 = nomb1
        this.nomb2 = nomb2
        this.comid = document.getElementsByClassName(comid)
        this.puntos = 0
        this.nombre = prompt("¡Hola! favor escribe tus nombres y apellidos:")

        btn.environment = this
        btn.addEventListener("click", this.evaluar)
        this.generarEjercicioAlgebraico()
    }

    generarEjercicioAlgebraico() {
        const frac1 = Frac.crearFracSimp()
        const frac2 = Frac.crearFracSimp()

        const numerador = frac1[0] * frac2[1] + frac1[1] * frac2[0]
        const denominador = frac1[1] * frac2[1]
        const suma = Frac.simplificar(numerador, denominador)
        this.suma = suma

        let codigoLatex = `\\cfrac{${frac1[0]}}{${frac1[1]}}`
        codigoLatex += ` + \\cfrac{${frac2[0]}}{${frac2[1]}} =`

        katex.render(codigoLatex, math, {displayMode: true})
    }

    generarEjercicioAlgebraicoResta() {
        const frac1 = Frac.crearFracSimp()
        const frac2 = Frac.crearFracSimp()

        if (frac1[0] * frac2[1] > frac1[1] * frac2[0]) {
            const numerador = frac1[0] * frac2[1] - frac1[1] * frac2[0]
            const denominador = frac1[1] * frac2[1]
            const suma = Frac.simplificar(numerador, denominador)
            this.suma = suma
            let codigoLatex = `\\cfrac{${frac1[0]}}{${frac1[1]}}`
            codigoLatex += ` - \\cfrac{${frac2[0]}}{${frac2[1]}} =`
            katex.render(codigoLatex, math, {displayMode: true})
        } else {
            const numerador = frac1[1] * frac2[0] - frac1[0] * frac2[1]
            const denominador = frac1[1] * frac2[1]
            const suma = Frac.simplificar(numerador, denominador)
            this.suma = suma
            let codigoLatex = `\\cfrac{${frac2[0]}}{${frac2[1]}}`
            codigoLatex += ` - \\cfrac{${frac1[0]}}{${frac1[1]}} =`
            katex.render(codigoLatex, math, {displayMode: true})
        }                  
                
    }

    generarProblemaLiteral() {
        const nombres = ['Miguel', 'Ángel', 'David', 'Sara', 'Liliana', 'Ana', 'Cecilia', 'María', 'Jesus', 'José']
        const objetos = ['pizza', 'torta','ponqué','barrilete','pan tajado','chocolatina','queso','litro de leche','litro de gaseosa','kg de carne']

        // Genera ejercicio y respuesta
        const frac1 = Frac.crearFracSimp()
        const frac2 = Frac.crearFracSimp()
        this.suma = Frac.simplificar(frac1[0]*frac2[1]+frac1[1]*frac2[0], frac1[1]*frac2[1])

        // Genera nombre y comida
        const nom1 = nombres[ Math.floor( Math.random() * 10 ) ]
        const nom2 = nombres[ Math.floor( Math.random() * 10 ) ]
        const comid = objetos[ Math.floor( Math.random() * 10 ) ]

        // Imprime el ejercicio
        this.nomb1.innerHTML = nom1
        katex.render(`\\frac{${frac1[0]}}{${frac1[1]}}`, this.outFrac1)
        this.nomb2.innerHTML = nom2
        katex.render(`\\frac{${frac2[0]}}{${frac2[1]}}`, this.outFrac2)
        for (let c of this.comid) {
            c.innerHTML = comid
        }
    }

    evaluar(e) {
        e.preventDefault()

        const suma = this.environment.suma
        const inNum = this.environment.inNum.value
        const inDen = this.environment.inDen.value

        let puntos = this.environment.puntos

        if ( inNum == suma[0] && inDen == suma[1] ) {
            puntos++
            if (puntos<10) {
                alert(`Bien\nPuntos ${puntos}`)
            } else {
                alert(`\nFelicitaciones ${this.environment.nombre}`)
            }
            
        } else {
            if ( puntos > 0 ) {
                puntos--
            }
            alert(`Ese gato no sirvió\nRespuesta ${suma[0]}/${suma[1]}\nPuntos ${puntos}`)
        }

        this.environment.puntos = puntos

        
        if ( puntos%3==0 ) {
            math.style.display = null;
            literal.style.display = "none";
            this.environment.generarEjercicioAlgebraico()
        } else if ( puntos%3==1) {
            math.style.display = null;
            literal.style.display = "none";
            this.environment.generarEjercicioAlgebraicoResta()
        } else if (puntos%3==2) {
            math.style.display = "none";
            literal.style.display = null;
            this.environment.generarProblemaLiteral()            
        } 
    }
}

const ejer = new Ejercicio(btnEvaluar, resNum, resDen, frac1, frac2, nombre1, nombre2, "comida")