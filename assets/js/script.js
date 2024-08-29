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
    // Desplazar hacia arriba y desvanecer los elementos
    gsap.to(".main-section", {
        duration: 1,
        y: "-100%",  // Desplaza hacia arriba
        opacity: 0,  // Desvanece los elementos
        ease: "power2.inOut"
    });

    // Desvanecer y ocultar el footer
    gsap.to("footer", {
        duration: 1,
        opacity: 0,
        ease: "power2.out"
    });

    // Mostrar y animar la nueva sección desde la esquina inferior izquierda
    gsap.fromTo("#empresas-section",
        {
            opacity: 0,
            x: "100%",
            y: "200%" // Inicia desde fuera de la vista, hacia abajo
        },
        {
            duration: 1.5,   // Aumenta la duración para una transición más suave
            y: "-91%",
            x: "0%" ,
            opacity: 1,
            delay: 0.5, // Inicia después de que la primera animación termine
            ease: "power2.out"
        }
    );

    // Mostrar el botón de "scroll-button-back"
    gsap.to(".scroll-indicator-back", {
        duration: 1.5,
        opacity: 1,
        display: "block", // Asegurarse de que se muestre
        delay: 0.5, // Sincroniza con la animación de la sección
        ease: "power2.out"
    });

    // Ocultar el botón de "scroll-button"
    gsap.to("#scroll-button", {
        duration: 0.5,
        opacity: 0,
        display: "none",
        ease: "power2.out"
    });
});

document.getElementById("scroll-button-back").addEventListener("click", function() {
    // Ocultar la sección de empresas con una animación inversa
    gsap.to("#empresas-section", {
        duration: 1.5,
        x: "100%",  // Mover hacia la derecha (reversa de la entrada)
        y: "200%",  // Mover hacia abajo (reversa de la entrada)
        opacity: 0,
        ease: "power2.inOut"
    });

    // Una vez que la sección de empresas se oculta, mostramos nuevamente el footer
    gsap.to("footer", {
        duration: 1,
        opacity: 1,
        ease: "power2.out",
    });

    // Mover y mostrar los elementos originales que se desvanecieron
    gsap.to(".main-section", {
        duration: 1.5,
        opacity: 1,
        y: "0%",  // Regresar a la posición original
        ease: "power2.out"
    });

    gsap.to(".color-palette, #mensaje", {
        duration: 1,
        opacity: 1,
        y: "0%",  // Regresar a la posición original
        ease: "power2.out",
        delay: 1,
    });    

    // Ocultar el botón de "scroll-button-back" y mostrar el de "scroll-button"
    gsap.to(".scroll-indicator-back", {
        duration: 0.5,
        opacity: 0,
        display: "none",
        ease: "power2.out"
    });

    gsap.to("#scroll-button", {
        duration: 0.5,
        opacity: 1,
        display: "block",
        ease: "power2.out",
        delay: 1.5  // Sincronizar con la desaparición de la sección de empresas
    });

    // Desplazarse hacia arriba de nuevo (simula scroll inverso)
    gsap.to(window, {duration: 1, scrollTo: {y: 0, autoKill: false}, ease: "power2.inOut"});
});


const columns = document.querySelectorAll('.custom-column');

columns.forEach((column, index) => {
    column.addEventListener('click', () => {
        const isExpanded = column.classList.contains('expanded');

        // Si el div ya está expandido, no hace nada
        if (isExpanded) return;

        // Reseteamos todas las columnas
        columns.forEach((col, colIndex) => {
            if (col !== column) {
                col.classList.remove('expanded');
                col.classList.add('collapsed');

                let xOffset = colIndex < index ? '-300%' : '300%'; // Aumenta el desplazamiento para ocultar más
                let clipPath = colIndex < index ? 'inset(0% 0% 0% -200%)' : 'inset(0% -200% 0% 0%)'; // Aumenta el recorte

                gsap.to(col.querySelector('img'), { 
                    x: xOffset, 
                    clipPath: clipPath, 
                    duration: 1 
                });
                gsap.to(col, { 
                    flex: 0.2, 
                    duration: 1 
                });
            }
        });

        // Expandimos la columna seleccionada
        column.classList.remove('collapsed');
        column.classList.add('expanded');
        gsap.to(column.querySelector('img'), { 
            x: "0%", 
            clipPath: 'inset(0%)', 
            duration: 1 
        });
        gsap.to(column, { 
            flex: 10, 
            duration: 1 
        });
    });
});
