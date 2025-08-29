/*
 * JavaScript behaviours for the Mononas website.
 *
 * Currently this script handles the responsive navigation menu
 * toggle and can be extended in the future to support additional
 * interactive behaviours such as showing scarcity messages or
 * tracking marketing events.
 */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }
});