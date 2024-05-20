async function gameHandler() {
    await game.exercise( s1, 1 )
    await game.exercise( s2, 1 )
    await game.exercise( s3, 1 )
    await game.exercise( s4, 1 )
    await game.exercise( s5, 1 )
    alert(game.end)
}

gameHandler()

function s1() {
    const solution = ['Cos(x)']
    const statement = ['[\\frac{1-Sen^2(x)}{Cos(x)}=?']
    return [statement, solution]
}

function s2() {
    const solution = ['Sen(x)']
    const statement = ['[Cos(x) Tan(x)=?']
    return [statement, solution]
}

function s3() {
    const solution = ['Sec(x)']
    const statement = ['[Tan(x) Sen(x) + Cos(x) = ?']
    return [statement, solution]
}

function s4() {
    const solution = ['Tan(x)']
    const statement = ['[\\frac{Csc(x) - Cos(x) Cot(x)}{Cos(x)} = ?']
    return [statement, solution]
}

function s5() {
    const solution = ['Cot(x)']
    const statement = ['[\\frac{Csc(x) - Cos(x) Tan(x)}{Cos(x)} = ?']
    return [statement, solution]
}