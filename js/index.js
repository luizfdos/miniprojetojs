const  root = document.querySelector('#root')
const textTitle = "Dificuldade"
// Tagged template string
const title = Title `
    color: #FFFFFF;
    ${textTitle}
    font-size: 2.5rem;
    margin-bottom: 2rem;
    letter-spacing: 1.5px;    
`


root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)

