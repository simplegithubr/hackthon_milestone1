var toggleButton = document.getElementById("toggle-skills"); // Variable ka naam sahi kiya
var skills = document.getElementById("skills");
toggleButton.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = 'block'; // Agar skills section hidden hai to usay dikhana
    }
    else {
        skills.style.display = 'none'; // Else block mein assignment operator use kiya gaya hai
    }
});
