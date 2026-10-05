// Ferme le menu déroulant "Environnement" quand on clique ou touche ailleurs sur la page,
// ou quand on appuie sur la touche Échap.
document.addEventListener('click', function (event) {
    document.querySelectorAll('details.nav-dropdown[open]').forEach(function (menu) {
        if (!menu.contains(event.target)) {
            menu.removeAttribute('open');
        }
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('details.nav-dropdown[open]').forEach(function (menu) {
            menu.removeAttribute('open');
        });
    }
});
