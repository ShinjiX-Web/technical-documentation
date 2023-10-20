const clickableLinks = document.querySelectorAll(".nav-link");
const clickSound = document.getElementById("click-sound");

clickableLinks.forEach(link =>
{
    link.addEventListener("click", () =>
    {
        clickSound.play();
    });
});