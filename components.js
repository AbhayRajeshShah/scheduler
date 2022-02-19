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
         <select name="" class="priority" id="select${i}" required=${true}>
         <option disabled=${true} selected=${true}>Priority</option>
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


const nav_btn=(name,fun)=>{
     return `
               <button class="nav_btn" id=${name} onclick='${fun}("${name}")'>${name}</button>
          `
}