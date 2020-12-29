export const inRangeY = (elem, classAnimation) => {
    const selected = document.querySelector(elem),
        boundSelected = selected.getBoundingClientRect()
    if(
        boundSelected.top >= 0 &&
        boundSelected.bottom <= (window.innerHeight || document.documentElement.clientHeightinnerHeight)
    ){
        selected.classList.add(classAnimation)
        // console.log('In VH')
    }
    else{
        selected.classList.remove(classAnimation)
        // console.log('Not in VH')
    }
}

window.onscroll = () => {
    let x_axis = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        y_axis = document.documentElement.scrollTop || document.body.scrollTop || 0
    const navBar = document.querySelector('nav')
    y_axis > 64 
    ? navBar.classList.add('transparent')
    : navBar.classList.remove('transparent')
    // console.log(x_axis, y_axis)
    //**********************
}
