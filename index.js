
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

// all text elements
const starttText = getElement("startt");
const addHTML = getElement("add");
const heading = getElement("heading")
const subjectsText = getElement("subjects");
const nav = getElement("nav");
const categories = getElement("categories")
let nav_btns = document.querySelectorAll(".nav_btn");
//get items from local storage
let subjects = getItem("subjects")


//add navbar event listener



//render items
const renderSubject=()=>{
    subjects=getItem("subjects")
    //check if array isnt empty
    if(subjects.length>0){
        let sub = ""
        let navString=nav_btn(`Home`,"add_navItem")
        //loop through elements
        subjects.forEach((el,i)=>{
            navString+=nav_btn(`${el.name}`,"add_navItem")
            categories.innerHTML+=`<div id='div${el.name}' class="no_display">Hi</div>`
            sub+=`<div class="subject" id=${i}><p>${el.name}</p>`;
            if(el.chapters.length!=0){
                el.chapters.forEach((chap,l)=>{
                    sub+=`<p>${chap.name}</p>`
                })
            }
            sub+=`${input_btn("add_chapter",i,i)}`+`</div>`
        })
        nav.innerHTML=navString;
        subjectsText.innerHTML=sub;
        nav_btns = document.querySelectorAll(".nav_btn")
    }else{
        subjectsText.innerHTML=`<p>No Subjects yet</p>`
    }
}

if(subjects==null){
    starttText.innerHTML=`<div class="start">
                            <p class="big" style="text-align: center;font-size: 24px;">
                                Welcome 
                            </p>
                            <p class="intro">
                                Hey and welcome to your personalised schedule maker! Start by adding subjects to your study space.
                            </p>
                            <button class="getStarted" id="start">Get Started</button>
                            </div>` 
    const start_btn = getElement("start");

    start_btn.addEventListener("click",()=>{
        starttText.innerHTML=""
    setItem("subjects",[]);
    subjects=[];
    addHTML.innerHTML=input_btn("add_subject","add",'')
    })
                             
}else{
    addHTML.innerHTML=input_btn("add_subject","add",'')
    renderSubject();
}




const add_subject=(id)=>{
    let el= getElement(String(id));
    subjects.push({name:el.value,chapters:[]});
    setItem("subjects",subjects);
    renderSubject();
    el.value=""
}

const add_chapter=(id,parent,i)=>{
  let parentid = getElement(parent).id;
  let el = getElement(String(id)+String(i));
  subjects[parentid].chapters.push({name:el.value,priority:0});
  setItem("subjects",subjects);
  renderSubject();
  el.value=""  
}

const add_navItem=(x)=>{
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