document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("resume-form");
    var resumeDisplayElement = document.getElementById("resume-display");
    // Form Submit
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // prevent page load
        // Collect the input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("Phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Generate the resume content dynamically
        var resumeHtml = "\n        <h2><b> Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true> ".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true> ").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true> ").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true><b>Education:</b> ").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true><b>Experience:</b> ").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true><b>Skills:</b> ").concat(skills, "</p>\n        ");
        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        }
        else {
            console.error("The resume display element is missing");
        }
    });
});
