const clickableLinks = document.querySelectorAll(".nav-link");
const clickSound = document.getElementById("click-sound");

clickableLinks.forEach(link =>
{
    link.addEventListener("click", () =>
    {
        clickSound.play();
    });
});



/**
https://github.com/matteobruni/tsparticles
https://particles.js.org
https://confetti.js.org
*/
// script.js

const confettiLinks = document.querySelectorAll(".nav-link");

confettiLinks.forEach(link =>
{
    link.addEventListener("click", (e) =>
    {
        runConfettiScript();
    });
});

function runConfettiScript()
{
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
    };

    function fire(particleRatio, opts)
    {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            })
        );
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });

    fire(0.2, {
        spread: 60,
    });

    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

