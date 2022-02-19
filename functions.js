//functions for localstorage
const getItem = (element)=>{
    return JSON.parse(localStorage.getItem(element))
}
const setItem=(element,data)=>{
    localStorage.setItem(element,JSON.stringify(data))
}

//get dom element
const getElement=(element)=>{
    return document.getElementById(element)
}



