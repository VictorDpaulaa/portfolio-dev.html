// Adiciona animação suave ao rolar a página
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
        }
    });
});