function createFallingSnow() {
    const numberOfSnowflakes = 100;
    const snowflakes = [];

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);
    }

    function animateSnowflakes() {
        snowflakes.forEach((snowflake, index) => {
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 3 + 2}s`;
            snowflake.style.animationDelay = `${Math.random() * 2}s, ${Math.random() * 2}s`;
            snowflake.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
            snowflake.addEventListener("animationiteration", () => {
                snowflake.style.left = `${Math.random() * window.innerWidth}px`;
            });
        });
    }

    animateSnowflakes();
    setInterval(animateSnowflakes, 7000);
}

createFallingSnow();
