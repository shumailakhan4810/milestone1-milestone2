// Get elements and cast their types appropriately
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Check if the elements exist before adding the event listener
if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
