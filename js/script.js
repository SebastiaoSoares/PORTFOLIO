function changeTheme(theme) {

    var body = document.body;
    body.classList.toggle("light-mode");

    var theme_btn = document.querySelector("#theme-btn");

    switch (theme) {
        case 'to light':
            theme_btn.setAttribute('name', 'moon');
            theme_btn.setAttribute('onclick', 'changeTheme(\'default\')');
            break;
        default:
            theme_btn.setAttribute('name', 'sunny');
            theme_btn.setAttribute('onclick', 'changeTheme(\'to light\')');
            break;
    }
}

function showMenu(s) {
    
    var nav = document.querySelector("#nav-ul");
    var btn = document.querySelector('#menu-btn');

    if (s) {
        nav.style.left = "0";
        btn.setAttribute("onclick", "showMenu(false)");
    } else {
        nav.style.left = "100vw";
        btn.setAttribute("onclick", "showMenu(true)");
    }

}