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

// Seleccionar los divs de text-div y pattern-lat correctamente
const textDiv = document.getElementById('text-div');
const patternLat = document.getElementById('pattern-lat');
const patternPurple = document.getElementById('pattern-purple');
const empresaLogo = document.getElementById('empresa-logo');

// Función para animar la aparición de los divs
function animateTextAndPattern() {
    // Animar el text-div desde la derecha
    gsap.fromTo(textDiv, 
        { 
            opacity: 0, 
            x: "-200%",  // Inicia fuera de la pantalla, a la derecha
            zIndex: 10  // Asegura que el text-div esté por encima del div expandido
        }, 
        { 
            duration: 1.5, 
            x: "0%",  // Se coloca completamente dentro del div expandido
            opacity: 1,
            ease: "power2.out"
        }
    );
    
    // Animar el pattern-lat desde arriba
    gsap.fromTo(patternLat,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
            zIndex: 5    // Coloca pattern-lat por debajo de text-div si es necesario
        }, 
        { 
            duration: 1.5, 
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
            delay: 0.5    // Aparece después del text-div
        }
    );

    gsap.fromTo(patternPurple,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
            zIndex: 5    // Coloca pattern-lat por debajo de text-div si es necesario
        }, 
        { 
            duration: 1.5, 
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
            delay: 0.5    // Aparece después del text-div
        }
    );
    

    // Expandir el logo de la empresa
    gsap.to(empresaLogo, {
        duration: 1,
        width: "234px",  // Tamaño final del logo
        height: "234px",
        top: "20%",
        left: "20%",
        ease: "power2.out"
    });
}

// Evento click para las columnas
columns.forEach((column, index) => {
    column.addEventListener('click', () => {
        const isExpanded = column.classList.contains('expanded');

        // Si el div ya está expandido, no hace nada
        if (isExpanded) return;

        // Reseteamos todas las columnas
        columns.forEach((col, colIndex) => {
            if (col !== column) {
                // Remueve la clase 'original' si está presente
                col.classList.remove('original');
                
                // Agrega 'collapsed' a todas las columnas que no están siendo clickeadas
                col.classList.add('collapsed');
                col.classList.remove('expanded');

                // Animación para contraer columnas no seleccionadas
                let xOffset = colIndex < index ? '-300%' : '300%';
                let clipPath = colIndex < index ? 'inset(0% 0% 0% -200%)' : 'inset(0% -200% 0% 0%)';

                gsap.to(col.querySelector('img'), { 
                    x: xOffset, 
                    clipPath: clipPath, 
                    duration: 1 
                });
                gsap.to(col, { 
                    flex: 0.25, 
                    duration: 1 
                });
            }
        });

        // Remueve la clase 'original' de la columna seleccionada
        column.classList.remove('original');
        // Agrega 'expanded' a la columna clickeada
        column.classList.add('expanded');
        column.classList.remove('collapsed');

        // Animación para expandir la columna seleccionada
        gsap.to(column.querySelector('img'), { 
            x: "0%", 
            clipPath: 'inset(0%)', 
            duration: 1 
        });
        gsap.to(column, { 
            flex: 15, 
            duration: 1 
        });

        // Ejecutar la animación de text-div, pattern-lat y empresa-logo
        animateTextAndPattern();
    });
});

