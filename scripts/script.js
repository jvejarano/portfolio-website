/**
 * script.js - Descripción de funcionalidades
 *
 * Este archivo JavaScript contiene funcionalidades para mejorar la experiencia de usuario
 * del portafolio personal de Jorge Vejarano. A continuación se describen las principales
 * características implementadas:
 *
 * 1. Desplazamiento suave para los enlaces de navegación:
 *    - Los enlaces de navegación se animan para hacer un desplazamiento suave hasta la sección
 *      correspondiente del sitio web, mejorando la experiencia de usuario.
 *    - Cada enlace es interceptado al hacer clic para evitar el comportamiento predeterminado,
 *      y se desplaza de manera suave hasta la sección destino, con un pequeño ajuste para la
 *      altura del encabezado.
 *
 * 2. Funcionalidad de encabezado fijo (sticky header):
 *    - Se agrega una clase `sticky` al encabezado cuando el usuario hace scroll más allá de
 *      100 píxeles, haciendo que el encabezado se mantenga visible.
 *    - Esto mejora la usabilidad al permitir acceso rápido al menú de navegación en todo momento.
 *
 * 3. Mensaje de confirmación al enviar el formulario de contacto:
 *    - Cuando el usuario envía el formulario de contacto, se muestra una alerta para confirmar
 *      que el mensaje ha sido enviado.
 *    - El formulario se reinicia después de enviar el mensaje.
 *
 */

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Sticky header functionality
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Form submission alert
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
        contactForm.reset();
    });
});