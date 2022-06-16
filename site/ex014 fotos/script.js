function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = 15
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora <12){
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#d0b68d'
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#695334'
    }else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#2c2032'
    }
}