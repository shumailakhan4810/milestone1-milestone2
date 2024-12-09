
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
    const skillsSection = document.getElementById('skills') as HTMLElement | null;
  
    if (toggleButton && skillsSection) {
      toggleButton.addEventListener('click', () => {
        const currentDisplay = window.getComputedStyle(skillsSection).display;
        if (currentDisplay === 'none') {
          skillsSection.style.display = 'block';
        } else {
          skillsSection.style.display = 'none';
        }
      });
    } else {
      console.error('Element with id "toggle-skills" or "skills" not found.');
    }
  });
  
