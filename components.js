const input_btn=(fun,parentid,i)=>{
    let functionstring = `${fun}('${fun}','${parentid}','${i}')`;
    let pholder="";
    if(parentid==="add"){
         pholder = "Subject Name"
    }else{
         pholder="Chapter Name"
    }
    return `
            <div class="add" id=${parentid}>
            <input type="text" placeholder=${pholder} name="sub" id='${fun}${i}'>
            <button class="new_sub"  onclick=${functionstring} >+</button>  
            </div>    
            `
}

