// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('show');
//     });
// });
// Registrar el plugin ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

document.getElementById("scroll-button").addEventListener("click", function() {
    // Animación de desplazamiento hacia arriba (simula scroll)
    gsap.to(window, {duration: 1, scrollTo: "#empresas-section", ease: "power2.inOut"});

    // Desvanecer y ocultar el footer
    gsap.to("footer", {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: function() {
            document.querySelector("footer").style.display = "none";
        }
    });

    // Mostrar y animar la nueva sección desde la esquina inferior izquierda
    gsap.fromTo("#empresas-section", 
        {
            display: "block", 
            opacity: 0, 
            x: "100%", 
            y: "200%"  // Inicia desde una posición diagonal más equilibrada
        }, 
        {
            duration: 1.5,   // Aumenta la duración para una transición más suave
            x: "0%", 
            y: "0%", 
            opacity: 1, 
            delay: 1, 
            ease: "power2.out"
        }
    );
});
