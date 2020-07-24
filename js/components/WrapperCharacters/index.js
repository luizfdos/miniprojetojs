const pathCucco = "images/cucco.png"
const cucco = Character`
    width: 20%;
    ${pathCucco}
`

const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters `
    display: flex;
    justify-content: space-evenly;
    ${cucco + cucco + cucco}
`

