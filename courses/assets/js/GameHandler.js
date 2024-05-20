class GameHandler {
    constructor ( container ) {
        // Provisional
        this.player = prompt('Nombre')
        this.end = `Felicitacioenes ${this.player}, terminaste los ejercicios, envía un pantallazo por Q10`
        // Fin Provisional



        this.$game = document.createElement('div')
        container.appendChild( this.$game )

        this.containerExercise = document.createElement('div')
        this.$game.appendChild( this.containerExercise )

        this.styleInput = document.createElement('style')
        this.$game.appendChild( this.styleInput )

        this.form = document.createElement('form')
        this.$game.appendChild( this.form )

        this.containerUserAnswers = document.createElement('div')
        this.form.appendChild( this.containerUserAnswers )

        this.$answer = document.createElement('div')
        this.$answer.style.display = "none"
        container.appendChild( this.$answer )

        this.btn = document.createElement('input')
        this.btn.setAttribute('type', 'submit')
        this.form.appendChild( this.btn )
        this.btn.onclick = e => {
            e.preventDefault()
            this.evaluateUserAnswer()
        }

        this.points = 0
    }



    exercise( functionExcercise, repetitions ) {
        this.functionExcercise = functionExcercise
        this.iRepetitionsExcercise = repetitions
        this.runExercise()
        this.inputs( this.solution.length )

        return new Promise( resolve=>{this.resolve = resolve} )
    }



    runExercise() {
        const [statement, solution] = this.functionExcercise()
        this.writeExercise( statement )
        this.solution = solution
    }



    inputs( quantity, urlStyle ) {
        this.containerUserAnswers.innerHTML = null
        this.styleInput.setAttribute('src', urlStyle)
        quantity++

        for (let i = 1; i < quantity; i++) {
            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.id = `input${i}`
            this.containerUserAnswers.appendChild( input )
        }
    }



    writeExercise( txt_tex ) {
        this.containerExercise.innerHTML = null
        let p

        for ( let t of txt_tex ) {
            switch ( t[0] ) {
                case '[':
                    t = t.substring(1, t.length)
                    if (p) {
                        this.containerExercise.appendChild(p)
                        p = null
                    }
                    this.containerExercise.innerHTML += katex.renderToString( t, {displayMode: true} )
                    break

                case '(':
                    t = t.substring(1, t.length)
                    if (!p) p = document.createElement('p')
                    p.innerHTML += katex.renderToString(t)
                    break

                case 't':
                    t = t.substring(1, t.length)
                default:
                    if (!p) p = document.createElement('p')
                    p.appendChild( document.createTextNode(t) )
            }
        }

        if (p)
            this.containerExercise.appendChild(p)
    }



    async evaluateUserAnswer() {
        this.readUserAnswers()

        let exerciseOk = true
        for (let i = 0; i < this.solution.length; i++)
            exerciseOk &= this.solution[i] == this.userAnswer[i]

        if ( exerciseOk ) {
            this.iRepetitionsExcercise--
            this.points++
            await this.showAnswer( false )
        } else {
            if ( this.points > 0 ) this.points--
            await this.showAnswer( true )
        }

        this.iRepetitionsExcercise ? this.runExercise() : this.resolve()
    }



    showAnswer( ok ) {
        this.$answer.innerText = `Puntos: ${this.points}`

        if ( ok ) {
            let solution = ''
            this.solution.forEach( s => { solution += `<br>${s}` } )
            this.$answer.innerHTML += `<br><br><p>La respuesta es${solution}</p>`
        }

        this.$game.style.display = 'none'
        this.$answer.style.display = null

        return new Promise( res => {
            setTimeout( () => {
                this.$game.style.display = null
                this.$answer.style.display = 'none'
                res()
            }, 3000 )
        } )
    }



    readUserAnswers() {
        this.userAnswer = []

        for ( let e of this.form.elements )
            this.userAnswer.push( e.value )

        this.userAnswer.pop()
    }
}

const game = new GameHandler( $containerGame )