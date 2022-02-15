

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
const subjectsText = getElement("subjects");
const addHTML = getElement("add");
const heading = getElement("heading")

//get items from local storage
let subjects = getItem("subjects")

//render items
const renderSubject=()=>{
    subjects=getItem("subjects")
    //check if array isnt empty
    if(subjects.length>0){
        let sub = ""
        //loop through elements
        subjects.forEach((el,i)=>{
            console.log(input_btn("add_chapter",i))
            sub+=`<div class="subject" id=${i}><p>${el.name}</p>`+`${input_btn("add_chapter",i,i)}`;
            if(el.chapters.length!=0){
                el.chapters.forEach((chap,l)=>{
                    sub+=`<p>${chap}</p>`
                })
            }
            sub+=`</div>`
        })
        subjectsText.innerHTML=sub;
    }else{
        subjectsText.innerHTML=`<p>No Subjects yet</p>`
    }
}

if(subjects==null){
    subjectsText.innerHTML=`<div class="start">
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
        subjectsText.innerHTML=""
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
  subjects[parentid].chapters.push(el.value);
  setItem("subjects",subjects);
  renderSubject();
  el.value=""  
}