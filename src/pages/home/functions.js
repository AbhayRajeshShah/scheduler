const add_subject=(id)=>{
    let el= getElement(String(id));
    subjects.push({name:el.value,chapters:[]});
   setItem("subjects", subjects);
    subjectsText.innerHTML=all_subjects()
    nav = getElement("nav");
    Navbar(true)
}

const add_chapter=(id,parent,i)=>{
  let parentid = getElement(parent).id;
  let el = getElement(String(id)+String(i));
  let sel = getElement('select'+String(i));
  subjects[parentid].chapters.push({name:el.value,priority:sel.value});
  setItem("subjects",subjects);
  subjectsText.innerHTML=all_subjects()
  el.value=""  
}


