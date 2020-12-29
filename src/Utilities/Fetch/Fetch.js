//GET
export const fetchGet = async (url, field, id, filter, filterValue) => {
    let response;
    
    if (id===null) {
        filter === null
        ? response = await fetch(`${url}/${field}/`)
        : response = await fetch(`${url}/${field}/?${filter}=${filterValue}`)
    } else {
        response = await fetch(`${url}/${field}/:${id}`)
    }
    let result = await response.json()
    // console.log(result)
    return result
}