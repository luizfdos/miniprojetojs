const style = `<style>
* {
    margin: 0;
    padding: 0;
    border: none;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c3a47;

}

#root {
    box-sizing: border-box;
    padding: 4rem;
    font-family: 'Press Start 2P', cursive;
    background-color: #1f8b4d;
    min-width: 760px;
    width: 40vw;
    height: 65vh;
    text-align: center;
}
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', style)