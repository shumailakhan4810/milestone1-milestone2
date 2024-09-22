// import { Http2ServerRequest } from "http2";
// import events from "inquirer/lib/utils/events";

// let form = document.getElementById("resume-form") as HTMLFormElement;
// let resume_displyElement = document.getElementById("resume-disply") as HTMLDivElement ;

// // Form Submit
// form.addEventListener('submit',(event:Event) =>{
//     event.preventDefault(); //prvent page load
//     //collect the input values
//     let name= (document.getElementById("name") as HTMLInputElement).value;
//     let email= (document.getElementById("email") as HTMLInputElement).value
//     let Phone= (document.getElementById("Phone") as HTMLInputElement).value
//     let education= (document.getElementById("education") as HTMLInputElement).value
//     let experience= (document.getElementById("experience") as HTMLInputElement).value
//     let skills= (document.getElementById("skills") as HTMLInputElement).value
//     // Generate the resume content dynamically
//     const resumeHtml=`<h2><B>Resume<B></h2>
//     <h3>personal information</h3>
//     <p><B>Name :</B>${name}</p>
//     <p><B>Email :</B>${email}</p>
//     <p><B>Phone:</B>${Phone}</p>
    

//      <h3>Education</h3>
//       <p><B>Education:</B>${education}</p>

//      <h3Experience</h3>
//      <p><B>Experience:</B>${experience}</p>
//      <h3>Skill</h3>
//      <p><B>Skill:</B>${skills}</p>
   
//     `;
//     // Display the generated resume
//     if(resume_disply){
//         resume_disply.innerHTML=resumeHtml;
//     }else{
//         console.error("The resume display element is missing")
//     }
    

// })
// new code


// ***

document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById("resume-form") as HTMLFormElement;
    let resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

    // Form Submit
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // prevent page load

        // Collect the input values
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let email = (document.getElementById("email") as HTMLInputElement).value;
        let phone = (document.getElementById("Phone") as HTMLInputElement).value;
        let education = (document.getElementById("education") as HTMLTextAreaElement).value;
        let experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        let skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Generate the resume content dynamically
        const resumeHtml = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p><b>Education:</b> ${education}</p>

        <h3>Experience</h3>
        <p><b>Experience:</b> ${experience}</p>

        <h3>Skills</h3>
        <p><b>Skills:</b> ${skills}</p>
        `;

        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        } else {
            console.error("The resume display element is missing");
        }
    });
});