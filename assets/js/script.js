// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('show');
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let hasScrolled = false; // Para evitar múltiples desplazamientos

//     function scrollToSection() {
//         if (!hasScrolled) { // Verificar si ya se ha hecho el desplazamiento
//             hasScrolled = true;
            
//             document.querySelector('#empresas-section').scrollIntoView({
//                 behavior: 'smooth' // Desplazamiento suave
//             });
            
//             // Reiniciar el estado después de un breve período
//             setTimeout(() => {
//                 hasScrolled = false;
//             }, 1000); // Ajusta el tiempo según sea necesario
//         }
//     }

//     function handleScroll(event) {
//         if (event.deltaY > 0) { // Solo para desplazamiento hacia abajo
//             scrollToSection();
//             event.preventDefault(); // Prevenir el desplazamiento por defecto
//         }
//     }

//     window.addEventListener('wheel', handleScroll, { passive: false });
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
        x: "0%",  // Mover hacia la derecha (reversa de la entrada)
        y: "0%",  // Mover hacia abajo (reversa de la entrada)
        opacity: 1,
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
const textDivRed = document.getElementById('text-div-red');
const textDivBlue = document.getElementById('text-div-blue');
const textUx = document.getElementById('text-div-ux');
const textDivByo = document.getElementById('text-div-byo');
const patternLat = document.getElementById('pattern-lat');
const patternPurple = document.getElementById('pattern-purple');
const patternShare = document.getElementById('pattern-share');
const patternRed = document.getElementById('pattern-red');
const patternBlue = document.getElementById('pattern-blue');
const patternUx = document.getElementById('pattern-ux');
const patternByo = document.getElementById('pattern-byo');
const empresaLogo = document.getElementById('empresa-logo');
const purpleIdeasText = document.getElementById('purple-ideas');
const overlay = document.getElementById('overlay');
// Función para animar la aparición de los divs
function animateTextAndPattern() {
    // Animar el text-div desde la derecha
    gsap.fromTo("#text-div", 
        { 
            opacity: 0, 
            marginLeft: "200%",  // Inicia fuera de la pantalla a la derecha
        }, 
        { 
            duration: 0.3,  
            marginLeft: "50%",  // Se coloca dentro del div expandido (ajusta según sea necesario)
            opacity: 1,
            ease: "power2.out"
        }
    );

    gsap.fromTo("#text-div-red", 
        { 
            opacity: 0, 
            marginLeft: "200%",  // Inicia fuera de la pantalla a la derecha
        }, 
        { 
            duration: 0.3,  
            marginLeft: "50%",  // Se coloca dentro del div expandido (ajusta según sea necesario)
            opacity: 1,
            ease: "power2.out"
        }
    );

    gsap.fromTo("#text-div-blue", 
        { 
            opacity: 0, 
            marginLeft: "200%",  // Inicia fuera de la pantalla a la derecha
        }, 
        { 
            duration: 0.3,  
            marginLeft: "50%",  // Se coloca dentro del div expandido (ajusta según sea necesario)
            opacity: 1,
            ease: "power2.out"
        }
    );

    gsap.fromTo("#text-div-ux", 
        { 
            opacity: 0, 
            marginLeft: "200%",  // Inicia fuera de la pantalla a la derecha
        }, 
        { 
            duration: 0.3,  
            marginLeft: "45%",  // Se coloca dentro del div expandido (ajusta según sea necesario)
            opacity: 1,
            ease: "power2.out"
        }
    );

    gsap.fromTo("#text-div-byo", 
        { 
            opacity: 0, 
            marginLeft: "200%",  // Inicia fuera de la pantalla a la derecha
        }, 
        { 
            duration: 0.3,  
            marginLeft: "40%",  // Se coloca dentro del div expandido (ajusta según sea necesario)
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
        }, 
        { 
            duration: 0.3,  
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
        }
    );

    gsap.fromTo(patternPurple,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
        }, 
        { 
            duration: 0.3,  
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
        }
    );

    gsap.fromTo(patternShare,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
        }, 
        { 
            duration: 0.3,  
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
        }
    );

    gsap.fromTo(patternRed,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
        }, 
        { 
            duration: 0.3,  
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
        }
    );

    gsap.fromTo(patternBlue,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
        }, 
        { 
            duration: 0.3,  
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
        }
    );

    gsap.fromTo(patternUx,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
        }, 
        { 
            duration: 0.3,  
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 0.13,   // Aparece gradualmente
            ease: "power2.out",
        }
    );

    gsap.fromTo(patternByo,  
        { 
            opacity: 0, 
            y: "-100%",  // Inicia fuera de la pantalla, solo en el eje Y (arriba)
            x: "0%",     // Mantiene la posición horizontal sin moverse en el eje X
        }, 
        { 
            duration: 0.3,  
            y: "0%",      // Se coloca en su posición final en el eje Y
            opacity: 1,   // Aparece gradualmente
            ease: "power2.out",
        }
    );
    // Expandir el logo de la empresa
    gsap.to(empresaLogo, {
        duration: 0.5,
        ease: "power2.out"
    });
}

function reverseAnimations() {
    // Animar text-divs para que desaparezcan hacia la derecha
    gsap.to("#text-div", {
        opacity: 0,
        marginLeft: "200%",  // Se mueve fuera de la pantalla hacia la derecha
        duration: 0.2,
        ease: "power2.in"
    });
    gsap.to("#text-div-red", {
        opacity: 0,
        marginLeft: "200%",  // Se mueve fuera de la pantalla hacia la derecha
        duration: 0.2,
        ease: "power2.in"
    });

    gsap.to("#text-div-blue", {
        opacity: 0,
        marginLeft: "200%",  // Se mueve fuera de la pantalla hacia la derecha
        duration: 0.2,
        ease: "power2.in"
    });
    debugger;
    gsap.to("#text-div-ux", {
        opacity: 0,
        marginLeft: "200%",  // Se mueve fuera de la pantalla hacia la derecha
        duration: 0.2,
        ease: "power2.in"
    });

    gsap.to("#text-div-byo", {
        opacity: 0,
        marginLeft: "200%",  // Se mueve fuera de la pantalla hacia la derecha
        duration: 0.2,
        ease: "power2.in"
    });

    // Animar patterns para que desaparezcan hacia arriba
    gsap.to("#pattern-lat", {
        opacity: 0,
        y: "-100%",  // Se mueve hacia arriba
        duration: 0.2,
        ease: "power2.in",
        delay: 0.2
    });

    gsap.to("#pattern-purple", {
        opacity: 0,
        y: "-100%",  // Se mueve hacia arriba
        duration: 0.2,
        ease: "power2.in",
        delay: 0.5
    });

    gsap.to("#pattern-share", {
        opacity: 0,
        y: "-100%",  // Se mueve hacia arriba
        duration: 0.2,
        ease: "power2.in",
        delay: 0.5
    });

    // Animar la frase "Purple Ideas" para que desaparezca hacia abajo
    gsap.to("#purple-ideas", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: function() {
            document.getElementById("purple-ideas").style.display = "none";
        }
    });    
}

function restoreColumns() {
    // Ocultar el overlay
    overlay.style.display = 'none';
    
    // Animar los text-divs y patterns de regreso
    reverseAnimations();
    // Restaurar todas las columnas
    columns.forEach((col) => {
        col.classList.remove('collapsed', 'expanded');
        col.classList.add('original');
        
        // Restaurar el tamaño original
        gsap.to(col.querySelector('img'), { 
            x: "0%", 
            clipPath: 'inset(0%)', 
            duration: 0.2
        });
        gsap.to(col, { 
            flex: 1,  // Ajusta según el tamaño inicial de las columnas
            duration: 0.2
        });
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
                col.classList.remove('original');
                col.classList.add('collapsed');
                col.classList.remove('expanded');
                let xOffset = colIndex < index ? '-300%' : '300%';
                let clipPath = colIndex < index ? 'inset(0% 0% 0% -200%)' : 'inset(0% -200% 0% 0%)';

                gsap.to(col.querySelector('img'), { 
                    x: xOffset, 
                    clipPath: clipPath, 
                    duration: 0.2
                });
                gsap.to(col, { 
                    flex: 0.20, 
                    duration: 0.2
                });
            }
        });

        column.classList.remove('original');
        column.classList.add('expanded');
        column.classList.remove('collapsed');

        gsap.to(column.querySelector('img'), { 
            x: "0%", 
            clipPath: 'inset(0%)', 
            duration: 0.2
        });
        gsap.to(column, { 
            flex: 15, 
            duration: 0.2
        });

        overlay.style.display = 'block';

        textDiv.classList.remove('original');
        textDiv.classList.add('expanded');
        textDiv.classList.add('collapsed');

        textDivRed.classList.remove('original');
        textDivRed.classList.add('expanded');

        // Ejecutar la animación de text-div, pattern-lat y empresa-logo
        animateTextAndPattern();

        // Mostrar "Purple Ideas" con animación
        gsap.fromTo(purpleIdeasText, 
            { opacity: 0 },  // Estado inicial (oculto)
            { 
                opacity: 1,    // Estado final (visible)
                duration: 0.2,   // Duración de la animación
                display: 'block'  // Cambiamos a visible
            }
        );
        
    });
});
overlay.addEventListener('click', restoreColumns);