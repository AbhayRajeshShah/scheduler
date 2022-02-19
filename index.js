
body.innerHTML+='<div id="nav">'+nav_btn(`Home`,"add_navItem")+'</div>'
body.innerHTML+=Home();
let nav = getElement("nav");
let starttText = getElement("startt");
let addHTML = getElement("add");
let subjectsText = getElement("subjects");




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
    subjectsText.innerHTML=`<p>No Subject yet</p>`;
    subjects=[];
    addHTML.innerHTML=input_btn("add_subject","add",'')
    })
                             
}else{
    addHTML.innerHTML=input_btn("add_subject","add",'')
    subjectsText.innerHTML=all_subjects();
    Navbar(true);
}




