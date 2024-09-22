// Get references to the form and display area
document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('resume-form');
    let resumeDisplayElement = document.getElementById('resume-display');
    let shareableLinkContainer = document.getElementById('shareable-link-container');
    let shareableLinkElement = document.getElementById('shareable-link');

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // prevent page reload
        // Collect input values
        let username = document.getElementById('username').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let education = document.getElementById('education').value;
        let experience = document.getElementById('experience').value;
        let skills = document.getElementById('skills').value;
        // Save form data in localStorage with the username as the key
        let resumeData = {
            name: name,
            email: email,
            phone: phone,
            education: education,
            experience: experience,
            skills: skills
        };
        localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
        // Generate the resume content dynamically
        var resumeHTML = "\n            <h2>Editable Resume</h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
        // Generate a shareable URL with the username only
        let shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        // Display the shareable link
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    });
    // Handle PDF download
    // downloadPdfButton.addEventListener('click', () => {
    //     window.print();
    //     // TO DO: implement PDF download functionality
    // });
    let downloadPdfButton = document.getElementById('download-pdf');
    if (downloadPdfButton) {
        downloadPdfButton.addEventListener('click', function () {
            window.print();
        });
    }
    else {
        console.error('Download PDF button not found');
    }
    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', function () {
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');
        if (username) {
            // Autofill form if data is found in localStorage
            var savedResumeData = localStorage.getItem(username);
            if (savedResumeData) {
                var resumeData = JSON.parse(savedResumeData);
                document.getElementById('username').value = username;
                document.getElementById('name').value = resumeData.name;
                document.getElementById('email').value = resumeData.email;
                document.getElementById('phone').value = resumeData.phone;
                document.getElementById('education').value = resumeData.education;
                document.getElementById('experience').value = resumeData.experience;
                document.getElementById('skills').value = resumeData.skills;
            }
        }
    });
});
