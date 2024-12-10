const mainBox = document.querySelector('.box-container')
const gridButton = document.querySelector('button')

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red value
    const g = Math.floor(Math.random() * 256); // Random green value
    const b = Math.floor(Math.random() * 256); // Random blue value
    return `rgb(${r}, ${g}, ${b})`; // Return RGB string
}

function createGridBoxes(gridSize){
    for(let i = 0; i < gridSize**2; i++){
        let ranColor = getRandomColor()
        let boxSize = 490/(gridSize)
        let newBox = document.createElement('div')
        newBox.classList.add('new-box')
        newBox.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px; background-color: ${ranColor};`)
        newBox.addEventListener('mouseenter', () => {
            if(window.getComputedStyle(newBox).opacity > 0){
                newBox.style.backgroundColor = getRandomColor()
                newBox.style.opacity = window.getComputedStyle(newBox).opacity - 0.2
            }
        })
        mainBox.appendChild(newBox)
    }
}

function removeBoxes(){
    const allBoxes = document.querySelectorAll('.new-box')
    allBoxes.forEach(element => {
        element.remove()
    });
}

gridButton.addEventListener('click', () => {
    let newGridSize
    do {
        newGridSize = prompt('Choose a new grid size')
    } while (isNaN(newGridSize))
    removeBoxes()
    createGridBoxes(newGridSize)
})

createGridBoxes(16)