/*
t - texto (no es obligatorio)
( - latex linea
[ - latex display

escribir( elemento, 'ttexto', '(x^2', '[x^2' )
*/

function escribir( ...txt_tex ) {
    const container = txt_tex[0]
    container.innerHTML = null
    txt_tex.shift()
    let p
    for ( let t of txt_tex ) {
        switch ( t[0] ) {
            case '[':
                t = t.substring(1, t.length)
                if (p) {
                    container.appendChild(p)
                    p = null
                }
                container.innerHTML += katex.renderToString( t, {displayMode: true} )
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
    if (p) container.appendChild(p)
}



function leer( idForm ) {
    let valores = []

    for ( let e of document.forms[idForm].elements )
        valores.push( e.value )
    
    valores.pop()
    return valores
}



function calificar( idForm, soluciones ) {
    const respuestaUsuario = leer("inRespuesta")
    let respuestaOk = true

    for ( let i = 0; i < soluciones.length; i++ )
        respuestaOk &= respuestaUsuario[i] == soluciones[i]

    return respuestaOk
}