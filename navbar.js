const nav_btn=(name,fun)=>{
    let activeClass=""
    if(name=="Home"){
         activeClass="active"
    }
    return `
              <button class='nav_btn ${activeClass}' id=${name} onclick='${fun}("${name}")'>${name}</button>
         `
}

const add_navItem=(x)=>{
    nav_btns = document.querySelectorAll(".nav_btn");
    let btn = getElement(x);
    nav_btns.forEach((el)=>{
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    })    
    btn.classList.add("active")
    if(x!=="Home"){
        console.log(x);   
    }
}


const Navbar=()=>{
    let sub="";
    sub+=nav_btn(`Home`,"add_navItem")
    subjects.forEach((el)=>{
        sub+=nav_btn(`${el.name}`,"add_navItem")
    })
    nav.innerHTML=sub;    
}