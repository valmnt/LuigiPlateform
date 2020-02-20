l = 0
function right() {
    var bg = document.getElementById('bg')
    bg.style.backgroundPositionX = l + 'px'
    l += -5
}

function left() {
    var bg = document.getElementById('bg')
    bg.style.backgroundPositionX = l + 'px'
    l += 5
}

function up() {

    var touche = event.keyCode;
    var nom = String.fromCharCode(touche);
    var character = document.getElementById('perso')
    var shooter = document.getElementById('shooter')
    var shooterLeft = document.getElementById('shooterLeft')

    if (nom == 'Z') {
        character.style.marginBottom = "100px"
        window.setTimeout(function () {
            character.setAttribute('src', 'assets/stay.png')

            character.style.marginBottom = "1.5%"
        }, 200)
        character.setAttribute('src', 'assets/saut.png')
    }

    i = 0
    if (nom == 'M') {
        shooter.style.display = 'block'
        window.setInterval(function () {
            shooter.style.left = i + '%'
            i += 2
        }, 200)
    }
    else {
        shooter.style.display = 'none'
    }

    if (nom == 'K') {
        shooterLeft.style.display = 'block'
        window.setInterval(function () {
            shooterLeft.style.right = i + '%'
            i += 2
        }, 200)
    }
    else {
        shooterLeft.style.display = 'none'
    }

    if (nom == 'D') {
        character.setAttribute('src', 'assets/runRight.png')
        window.setInterval(function () {
            right()
        }, 10)
    }

    if (nom == 'Q') {
        character.setAttribute('src', 'assets/runLeft.png')
        window.setInterval(function () {
            left()
        }, 10)
    }


}

