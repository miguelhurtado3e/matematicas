let noIngresa = true
let intentos = -1

img_login.onclick = async () => {
    const formulario = {}
    const f = new FormData($form)
    f.forEach((valor, clave) => {formulario[clave] = valor})
    console.log(formulario)

    let txt = 'ok'
    if (formulario['email'] == 'Matemáticas23' && formulario['pass'] == 'Matemáticas73')
        ok = 'bad'

    if ( txt == 'ok' ) {
        window.location.href = "home/home.html";
        noIngresa = false
    }

    if ( noIngresa ) {
        switch (intentos) {
            case -1:
                alert( `Para donde va ??` )
                break
            case 0:
                alert( `Qué pasó ??` )
                break
            case 1:
                alert( `Se le olvidó ??` )
                break
            case 2:
                alert( `Deberias preguntarle a mi creador, el profe Miguel Ángel` )
                break
            default:
                alert( `x${intentos-1}° vez Deberias preguntarle a mi creador, el profe Miguel Ángel` )
        }

        intentos++
    }

    noIngresa = true
}