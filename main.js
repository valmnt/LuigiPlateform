function up() {

    var touche = event.keyCode;
    var nom = String.fromCharCode(touche);
    var character = document.getElementById('perso')
    var shooter = document.getElementById('shooter')

    if (nom == 'E') {
        character.style.marginBottom = "100px"
        window.setTimeout(function () {
            character.setAttribute('src', 'assets/luigi.png')

            character.style.marginBottom = "1.5%"
        }, 200)
        character.setAttribute('src', 'assets/saut.png')
    }

    i = 0
    if (nom == 'R') {
        shooter.style.display = 'block'
        window.setInterval(function () {
            shooter.style.left = i + '%'
            i += 2
        }, 100)
    }
    else {
        shooter.style.display = 'none'
    }


}
l = 0
function backDef() {
    var bg = document.getElementById('bg')
    bg.style.backgroundPositionX = l + 'px'
    l += -150
}
window.setInterval(function () {
    backDef()
}, 90)

