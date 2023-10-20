const modeToggle = document.getElementById("mode-toggle");
const styleLink = document.getElementById("style-link");

// Check the user's preference from local storage, if available
const userPreference = localStorage.getItem("mode");
if (userPreference === "night")
{
    setNightMode();
    modeToggle.checked = true;
} else
{
    setDayMode();
}

// Function to set day mode
function setDayMode()
{
    styleLink.href = "day-style.css";
    localStorage.setItem("mode", "day");
}

// Function to set night mode
function setNightMode()
{
    styleLink.href = "night-style.css";
    localStorage.setItem("mode", "night");
}

// Event listener for mode toggle switch
modeToggle.addEventListener("change", () =>
{
    if (modeToggle.checked)
    {
        setNightMode();
    } else
    {
        setDayMode();
    }
});