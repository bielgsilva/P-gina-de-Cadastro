//ESCONDER/MOSTRAR SENHA

let olho = document.getElementById('olho')

olho.addEventListener('click', function () {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')

  }
})


//TROCAR DE TELAS
const mudarTela = document.querySelector('.link')

mudarTela.addEventListener('click', function () {

  window.location = '/pages/cadastro/index.html'

})



/*VALIDACAO DE LOGIN*/

const form = document.querySelector('.form-login')
const usuarioLogin = document.querySelector('#usuario-login')
const senhaLogin = document.querySelector('#senha-login')
const spanLogin = document.querySelector('.card-login span')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()

  if (!usuarioLogin.value || !senhaLogin.value) {
    return spanLogin.innerText = 'Escreva todos os campos'
  }
  // window.location = '/pages/main/index.html'
})
console.log('teste')


async function makeLogin() {
  const response = await api.post('/login', {



  })
}