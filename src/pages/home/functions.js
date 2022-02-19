const add_subject=(id)=>{
    let el= getElement(String(id));
    subjects.push({name:el.value,chapters:[]});
    setItem("subjects",subjects);
    subjectsText.innerHTML=all_subjects()
    Navbar()
    el.value=""
}

const add_chapter=(id,parent,i)=>{
  let parentid = getElement(parent).id;
  let el = getElement(String(id)+String(i));
  subjects[parentid].chapters.push({name:el.value,priority:0});
  setItem("subjects",subjects);
  subjectsText.innerHTML=all_subjects()
  el.value=""  
}


