const nav_btn=(name,fun,active)=>{
    let activeClass=""
    if(active){
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
        body.innerHTML='<div id="nav">'+'</div>'
        nav = getElement("nav");
        Navbar(false);
        let btn = getElement(x);
        btn.classList.add("active");
        Subject(x); 
        body.innerHTML+=`<div id='category_section'></div>`
    }else{
        body.innerHTML='<div id="nav">'+'</div>'
        nav = getElement("nav");
        Navbar(true);
        body.innerHTML+=Home();
         addHTML = getElement("add");
         addHTML.innerHTML=input_btn("add_subject","add",'')
         subjectsText = getElement("subjects");
    }
}


const Navbar=(x)=>{
    console.log(subjects)
    let sub="";
    sub+=nav_btn(`Home`,"add_navItem",x)
    subjects.forEach((el)=>{
        sub+=nav_btn(`${el.name}`,"add_navItem")
    })
    nav.innerHTML=sub;    
}