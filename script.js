let aboutMe = document.getElementById("nav_aboutme");
let skills = document.getElementById("nav_skills");
let projects = document.getElementById("nav_projects");
let recomendation = document.getElementById("nav_recommendations");
let rec_btn = document.getElementById("rec_btn");
let recomendationList = document.getElementById("recomendation_list");
aboutMe.onmouseover = (event) =>{
    aboutMe.style.border = "2px solid #F2F3F4 ";
    aboutMe.style.fontFamily ="cursive";
    aboutMe.style.textDecoration = "underline";
};
aboutMe.onmouseout = () =>{
    aboutMe.style.border = "none";
    aboutMe.style.fontFamily ="initial";
    aboutMe.style.textDecoration = "none";
};
skills.onmouseover = (event) =>{
    skills.style.border = "2px solid #F2F3F4 ";
     skills.style.fontFamily ="cursive";
     skills.style.textDecoration = "underline";
};
skills.onmouseout = () =>{
    skills.style.border = "none";
    skills.style.fontFamily ="initial";
    skills.style.textDecoration = "none";
};
projects.onmouseover = (event) =>{
    projects.style.border = "2px solid #F2F3F4 ";
     projects.style.fontFamily ="cursive";
     projects.style.textDecoration = "underline";
};
projects.onmouseout = () =>{
    projects.style.border = "none";
     projects.style.fontFamily ="initial";
     projects.style.textDecoration = "none";
};
recomendation.onmouseover = (event) =>{
    recomendation.style.border = "2px solid #F2F3F4 ";
     recomendation.style.fontFamily ="cursive";
     recomendation.style.textDecoration = "underline";
};
recomendation.onmouseout = () =>{
    recomendation.style.border = "none";
    recomendation.style.fontFamily ="initial";
    recomendation.style.textDecoration = "none";
};

// addition of new recommendation through recommendation button

 


rec_btn.addEventListener("click",()=>{

// for confirmation dailogue box
let result = confirm("Are you sure you wanted to write new recommendation?");
if(result){
    
   


    let newRec = prompt("Enter the new recommendation:");
    if(newRec && newRec.trim() !==""){
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = newRec;
        li.appendChild(p);
        recomendationList.appendChild(li);
    }
    else{
        alert("No text entered. Recommendation is not added")
    }}
    else{
    alert("You clicked cancel!");
} ;

});
