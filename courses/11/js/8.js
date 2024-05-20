async function gameHandler() {
    while ( game.points < 20) {
        await game.exercise( cuadrado, 1 )
        await game.exercise( cubo, 1 )
        await game.exercise( trianRecIsos, 1 )
    }
    alert(game.end)
}

gameHandler()

function cuadrado() {
    const d = Math.floor( Math.random()*10 )+1
    const b = Math.floor( Math.random()*10 )+1
    const solution = [ 2*b*d, 'mm^2/s' ]
    const statement = ['Si el lado de un cuadrado cambia a razón de ', `(${d}`, ' mm/s. ¿a qué velocidad cambia el área del cuadrado en el instante que el lado mide ', `(${b}`, ' mm?']
    return [statement, solution]
}

function cubo() {
    const d = Math.floor( Math.random()*10 )+1
    const b = Math.floor( Math.random()*10 )+1
    const solution = [ 3*b*b*d, 'mm^3/s' ]
    const statement = ['Si el lado de un cubo cambia a razón de ', `(${d}`, ' mm/s. ¿a qué velocidad cambia el volumen del cubo en el instante que el lado mide ', `(${b}`, ' mm?']
    return [statement, solution]
}

function trianRecIsos() {
    const d = Math.floor( Math.random()*10 )+1
    const b = Math.floor( Math.random()*10 )+1
    const solution = [ b*d, 'mm^2/s' ]
    const statement = ['Si el cateto de un triángulo rectángulo isóscels cambia a razón de ', `(${d}`, ' mm/s. ¿a qué velocidad cambia el área del dicho triángulo en el instante que el lado mide ', `(${b}`, ' mm?']
    return [statement, solution]
}