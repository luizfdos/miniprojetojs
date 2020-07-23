// function Title(css, ...values)(...)
// ...values é um array que recebe n valores
// abaixo está sendo definido vários parametros ao inves de um unico array com values

function Title(css, textContent, smallContent, otherText) {
    return `
        <h1 style="${css[0]}${css[1]}">
            ${textContent}<small>
            
            ${smallContent}</small>
            ${otherText}
        </h1>`
}

