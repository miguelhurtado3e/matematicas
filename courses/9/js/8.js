async function gameHandler() {
    while ( game.points < 30) {
        await game.exercise( difCuadrados1, 1 )
        await game.exercise( difCuadrados2, 1 )
        await game.exercise( positivos, 1 )
        await game.exercise( negativos, 1 )
        await game.exercise( unnegativo1, 1 )
        await game.exercise( unnegativo2, 1 )     
        await game.exercise( unnegativo2, 1 )
        await game.exercise( unnegativo3, 1 )
        await game.exercise( unnegativo4, 1 )
    }
    alert(game.end)
}

gameHandler()

function positivos() {
    const a = Math.floor( Math.random()*10 )+1
    const b = Math.floor( Math.random()*10 )+1
    const p = a*b
    const s = a+b
    const solution = [ `x+${b}` ]
    const statement = [`[\\frac{x^2+${s}x+${p}}{x+${a}}=?`]
    return [statement, solution]
}

function negativos() {
    const a = Math.floor( Math.random()*10 )-11
    const b = Math.floor( Math.random()*10 )-11
    const p = a*b
    const s = a+b
    const solution = [ `x${b}` ]
    const statement = [`[\\frac{x^2 ${s}x + ${p}}{x${a}}=?`]
    return [statement, solution]
}

function unnegativo1() {
    const a = Math.floor( Math.random()*10 )+12
    const b = Math.floor( Math.random()*10 )*(-1)-1
    const p = a*b
    const s = a+b
    const solution = [ `x${b}` ]
    const statement = [`[\\frac{x^2 + ${s}x ${p}}{x+${a}}=?`]
    return [statement, solution]
}

function unnegativo2() {
    const a = Math.floor( Math.random()*10 )+1
    const b = Math.floor( Math.random()*10 )*(-1)-12
    const p = a*b
    const s = a+b
    const solution = [ `x${b}` ]
    const statement = [`[\\frac{x^2 ${s}x ${p}}{x+${a}}=?`]
    return [statement, solution]
}

function unnegativo3() {
    const a = Math.floor( Math.random()*10 )+12
    const b = Math.floor( Math.random()*10 )*(-1)-1
    const p = a*b
    const s = a+b
    const solution = [`x+${a}`]
    const statement = [`[\\frac{x^2 + ${s}x ${p}}{x${b}}=?`]
    return [statement, solution]
}

function unnegativo4() {
    const a = Math.floor( Math.random()*10 )+1
    const b = Math.floor( Math.random()*10 )*(-1)-12
    const p = a*b
    const s = a+b
    const solution = [`x+${a}`]
    const statement = [`[\\frac{x^2 ${s}x ${p}}{x${b}}=?`]
    return [statement, solution]
}

function difCuadrados1() {
    const a = Math.floor( Math.random()*10 )+1
    const p = a*a
    const solution = [ `x-${a}` ]
    const statement = [`[\\frac{x^2 - ${p}}{x+${a}}=?`]
    return [statement, solution]
}

function difCuadrados2() {
    const a = Math.floor( Math.random()*10 )+1
    const p = a*a
    const solution = [ `x+${a}` ]
    const statement = [`[\\frac{x^2 - ${p}}{x-${a}}=?`]
    return [statement, solution]
}