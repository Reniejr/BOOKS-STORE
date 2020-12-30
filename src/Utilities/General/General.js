//RANDOM PICK
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
