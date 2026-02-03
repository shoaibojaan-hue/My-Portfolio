document.addEventListener("DOMContentLoaded", () => {
    // 1. Navbar Scroll Logic
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // 2. THE ENDLESS SCROLL FIX
    const tracks = document.querySelectorAll('.auto-clone');
    tracks.forEach(track => {
        // Clone the content to make it twice as long
        const content = track.innerHTML;
        track.innerHTML = content + content; 
    });
});

