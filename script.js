function Verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('verificar os dados e tente novamente')
    } else {
        var masc = document.getElementById('masc')
        var fem = document.getElementById('fem')
        var idade = ano - Number (fano.value)
        var gênero = ''
        if(masc.checked){
            gênero = 'man' 
            if(masc < 2010 && masc > 1950){
                img.src = 'man.jpg'
                document.body.style.background = '#a9d6e5'
            } 
        }else if (fem.checked) {
            gênero = 'Woman'
                img.src = 'woman.jpg'
                document.body.style.background = '#778899'
        }   
        res.innerHTML = `a ${idade} year old ${gênero} was detected`
    }

}