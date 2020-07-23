const  root = document.querySelector('#root')
const textTitle = "Dificuldade"

// Tagged template string
const title = Title `
    color: red;
    ${textTitle}
    font-size: 30px;
    ${'Texto pequeno'}
    ${'Outro texto'}
`

root.insertAdjacentHTML('beforeend', title)