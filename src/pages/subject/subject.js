

const Subject=(x)=>{
    let category = getElement("category_section")
    
    let el =subjects.find(el=>el.name==x);
    let sub=`<p align="center" class="big">${el.name}</p>`;
    sub+=`
    <div id="check">
        <input type="text" name="" id="category_name">`
        el.chapters.forEach((els,i)=>{
            sub+=`<div class="chap">
            
            <input type="checkbox" class="checkbox" id='chap${i}' value='${els.name}'>
            <label for="chap${i}"> ${els.name}</label>
        </div>`
        })
    sub+=`</div>`
    body.innerHTML+=sub;
    return el;
}