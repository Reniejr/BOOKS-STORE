export const inRangeY = (elem, classAnimation) => {
    const selected = document.querySelector(elem),
        boundSelected = selected.getBoundingClientRect(),
        maxScroll = document.documentElement.scrollTopMax || document.body.scrollTopMax
    let y_axis = document.documentElement.scrollTop || document.body.scrollTop || 0
    if(
        boundSelected.top >= 0 &&
        boundSelected.bottom <= (window.innerHeight || document.documentElement.clientHeightinnerHeight)
    ){
        selected.classList.add(classAnimation)
        // console.log(y_axis)
    }
    if(y_axis === 0 || y_axis === maxScroll){
        selected.classList.remove(classAnimation)
    }

}

export const homeBooksAnimation = () => {
    inRangeY('#homepage .category:nth-of-type(3)', 'slideX')
    inRangeY('#homepage .category:nth-of-type(4) .details', 'slideX')
    inRangeY('#homepage .category:nth-of-type(4) .show-book', 'slideX')
    inRangeY('#homepage .category:nth-of-type(5)', 'scrollShow')
    inRangeY('#homepage .category:nth-of-type(6)', 'slideX')
    inRangeY('#homepage .category:nth-of-type(7) .details', 'slideX')
    inRangeY('#homepage .category:nth-of-type(7) .show-book', 'slideX')
}

export const categoryPageScroll = () => {
    inRangeY('.preview', 'detailFixed')
}

export const navScroll = () => {
    let x_axis = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        y_axis = document.documentElement.scrollTop || document.body.scrollTop || 0
    //NAVBAR
    const navBar = document.querySelector('nav')
    y_axis > 64 
    ? navBar.classList.add('transparent')
    : navBar.classList.remove('transparent')
    // console.log(x_axis, y_axis)
}

