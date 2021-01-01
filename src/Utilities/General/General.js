// RANDOM PICK
export const pickRandom = (array) => {
    let n;
    n = Math.floor(Math.random()*array.length)
    return n
}

//FIND OBJ BY INDEX
export const findObjbyIndex = (array, index) => {
    let selected = {}
    selected = array[index]
    // console.log(selected)
    return selected
}

//DIVIDE BY CHUNKS
export const chunkArray = (array, value) => {
    let chunkContainer = [],
        times = array.length / value,
        arrayRest = array
    for (let i = 0; i < times; i++) {
        let chunk = []
        chunk = arrayRest.splice(0, value)
        chunkContainer.push(chunk)
    }
    console.log(chunkContainer)
    return chunkContainer
}

//DEACTIVATE CLASS
export const deactivateClass = (elem, classAnimation) => {
    let domNode = document.querySelector(elem)
    domNode.classList.remove(classAnimation)
}