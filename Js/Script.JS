//DOM
const modal = document.querySelector('.modal-container')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const button = document.querySelector('.btnOpenModal')
const resultado = document.querySelector('#resultado')
const buttonMedia = document.querySelector('#botaoMedia')
const nome = document.querySelector('#nome')
  const tempo = new Date()

// RESULTADO
button.addEventListener('click', ()=>{
    event.preventDefault();

   
    let nome1 = (nome.value)
    let valor1 = parseFloat(nota1.value)
    let valor2 = parseFloat(nota2.value)
    let valor3 = parseFloat(nota3.value)
    

    let media = (valor1 + valor2 + valor3) / 3

    if(valor1 >= 0 && valor2 >= 0 && valor3 >= 0 && nome1!= ''){
        corModel(media, buttonMedia)
        if(media >= 7){
            resultado.innerHTML = `<h3> ${verificar()}  O aluno ${nome1} está com a media final ${media.toFixed(2)}, e ele foi Aprovado!!</h3>`
        }
        else if(media < 7 && media >=4){
            resultado.innerHTML = `<h3> ${verificar()} o aluno ${nome1} está com a media final ${media.toFixed(2)}, ele está na Prova final!!</h3>`
        }else{
            resultado.innerHTML = `<h3> ${verificar()}, o aluno ${nome1} está com a media final ${media.toFixed(2)}, ele está na Recuperação!!</h3>`
        }
    }else{
        media=-1
        corModel(media, buttonMedia)
        resultado.innerHTML = `<h3>${verificar()} Por favor preencha todos os campos!</h3>`
    }  
})

function corModel (media,botao){
    if(media>=0){
        botao.innerHTML = `<h3>${media.toFixed(2)}</h3>`
        if(media >= 7){
            botao.classList.add('aprovado')
            botao.classList.remove('provaFinal')
            botao.classList.remove('recuperacao')
            botao.classList.remove('invalido')
        }
        else if(media < 7 && media >=4){
            botao.classList.add('provaFinal')
            botao.classList.remove('aprovado')
            botao.classList.remove('recuperacao')
            botao.classList.remove('invalido')
        }else if(media < 4 && media >= 0 ){
            botao.classList.add('recuperacao')
            botao.classList.remove('aprovado')
            botao.classList.remove('provaFinal')
            botao.classList.remove('invalido')
        }
    }else if(media < 0){
        botao.classList.add('invalido')
        botao.classList.remove('recuperacao')
        botao.classList.remove('aprovado')
        botao.classList.remove('provaFinal')
        botao.innerHTML = `<h3> Invalida !!</h3>` 
    }

}



// FUNCÕES MODAL//
function openModal(){   
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}



function verificar(){
    let hora = tempo.getHours()
    if(hora >= 5 && hora < 13){
        return "Bom dia!"
    } else if(hora >= 13 && hora < 18 ){
        return "Boa tarde!!"
    } else {
        return"boa noite!!"
    }
}