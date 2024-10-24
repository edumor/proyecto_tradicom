// script.js
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('marketing-video');
    video.playbackRate = 0.5; // Set the desired playback speed
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('marketing-video2');
    video.playbackRate = 5.0; // Incrementa la velocidad de reproducción
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el ítem del navbar y el <section> con el ID PSA
    const navbarItem = document.querySelector('a[href="#PSA"]');
    const sectionPSA = document.getElementById('PSA');

    // Añade un evento de clic al ítem del navbar
    navbarItem.addEventListener('click', function() {
        // Añade la clase CSS al <section>
        sectionPSA.classList.add('margin-top');
    });
});