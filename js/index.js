const  root = document.querySelector('#root')
const textTitle = "Dificuldade"

// Tagged template string
const title = Title `
    color: #82589F;
    ${textTitle}
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    
`

root.insertAdjacentHTML('beforeend', title)