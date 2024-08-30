
function mainPage() {
    //En esta parte del código hacemos que el
    let infoSection = document.getElementById("information-section")
    infoSection.style.display = "none"

    let gameSection = document.getElementById("game-section")
    gameSection.style.display = "flex"

    let commentSection = document.getElementById("comment-section")
    commentSection.style.display = "flex"
    window["button-logo"].addEventListener('click', dynamicPage)

}

function dynamicPage() {
    let infoSection = document.getElementById("information-section")
    infoSection.style.display = "flex"

    let gameSection = document.getElementById("game-section")
    gameSection.style.display = "none"

    let commentSection = document.getElementById("comment-section")
    commentSection.style.display = "none"
    window["button-logo"].addEventListener('click', reload)
}

function reload() {
    location.reload()
}

window["button-Upsin"].addEventListener('click', function (event) {
    window.location.href = 'https://www.upsin.edu.mx/';
});

window.addEventListener("load", mainPage)

/** CONFIGURACIÓN DE DISQUS **/
var disqus_config = function () {
    this.page.url = 'https://gameinsanoprueba.000webhostapp.com/';
    this.page.identifier = 'https://gameinsanoprueba.000webhostapp.com/'
};
(function () { /*Pongase a chambear*/
    var d = document, s = d.createElement('script');
    s.src = 'https://insidente.disqus.com/embed.js';
    s.setAttribute('date-timestamps', + new Date());
    (d.head || d.body).appendChild(s);
})();