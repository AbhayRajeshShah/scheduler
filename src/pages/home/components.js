const input_btn=(fun,parentid,i)=>{
    let functionstring = `${fun}('${fun}','${parentid}','${i}')`;
    let pholder="";
    if(parentid==="add"){
         pholder = "Subject Name"
         return `
         <div class="add" id=${parentid}>
         <input type="text" placeholder=${pholder} name="sub" id='${fun}${i}'>
         <button class="new_sub"  onclick=${functionstring} >+</button>  
         </div>    
         `
    }else{
         pholder="Chapter Name"
         return `
         <div class="add" id=${parentid}>
         <select name="" class="priority" id="select${i}" default='0' required=${true}>
         <option disabled=${true} selected=${true} value=${1}>Priority</option>
         <option value="0">Low</option>
         <option value="1">Normal</option>
         <option value="2">High</option>
          </select>
         <input type="text" placeholder=${pholder} name="sub" id='${fun}${i}'>
         
         
          <button class="new_sub"  onclick=${functionstring} >+</button>  
         </div>    
         `
    }

}

const new_subject=(name,chaps,i)=>{
     let sub=""
     sub+=`<div class="subject" id=${i}><p>${name}</p>`;
     if(chaps.length!=0){
         chaps.forEach((chap,l)=>{
              let icon = `<i class="fa-solid fa-arrow-up"></i>`
             if(chap.priority==0){
               icon=`<i class="fa-solid fa-arrow-down"></i>`
             }else if(chap.priority==2){
                  icon=`<i class="fa-solid fa-angles-up"></i>`
             } 
             sub+=`<div class="chapter"><p>${chap.name}</p><p>${icon}</p></div>`
         })
     }
     sub+=`${input_btn("add_chapter",i,i)}`+`</div>`
     return sub;
}

const all_subjects=()=>{
     if(subjects!==null){
          subjects=getItem("subjects");
          let sub=""
          if(subjects.length>0){     
               subjects.forEach((el,i)=>{
                   sub+= new_subject(el.name,el.chapters,i)
               })
          }else{
               sub="<p>  No subjects yet</p>"
          }
          return sub;
     }else{
          return ""
     }

}


