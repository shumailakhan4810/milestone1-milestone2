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
        <h2><b> Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contenteditable="true> ${name}</span></p>
        <p><b>Email:</b><span contenteditable="true> ${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true> ${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true><b>Education:</b> ${education}</p>

        <h3>Experience</h3>
        <p contenteditable="true><b>Experience:</b> ${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true><b>Skills:</b> ${skills}</p>
        `;

        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        } else {
            console.error("The resume display element is missing");
        }
    });
});