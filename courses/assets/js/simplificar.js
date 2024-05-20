class Fraccion {
    simplificar(a, b) {
        let d = 2
        let menor

        if ( a < b ) {
            menor = a
        } else {
            menor = b
        }

        while ( d <= menor ) {
            while ( a % d == 0 && b % d == 0 ) {
                a /= d
                b /= d
            }

            if ( a < b ) {
                menor = a
            } else {
                menor = b
            }

            d++
        }

        return [a, b]
    }

    crearFracSimp() {
        const numerador = Math.floor( Math.random() * 10 ) + 1;
        const denominador = Math.floor( Math.random() * 10 ) + 1;

        return this.simplificar(numerador, denominador);
    }
}



const Frac = new Fraccion()