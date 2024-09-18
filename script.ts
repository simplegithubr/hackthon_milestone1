const toggleButton = document.getElementById("toggle-skills") as HTMLElement;  // Variable ka naam sahi kiya
const skills = document.getElementById("skills") as HTMLElement;

 toggleButton.addEventListener('click', () => {
    if (skills.style.display === "none") {
    skills.style.display = 'block';  // Agar skills section hidden hai to usay dikhana
    } else {
     skills.style.display = 'none';  // Else block mein assignment operator use kiya gaya hai
    }
});