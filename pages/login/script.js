//ESCONDER/MOSTRAR SENHA

const olho = document.querySelector('#olho')

olho.addEventListener('click', function () {
  let inputSenha = document.querySelector('#senha-login')

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
  makeLogin()
})


function makeLogin() {
  const savedUser = localStorage.getItem('user')

  if (savedUser) {
    const user = JSON.parse(savedUser)

    if (user.nome === usuarioLogin.value && user.senha === senhaLogin.value) {
      spanLogin.innerText = 'Login efetuado com Sucesso'
      abrirModal()
      // window.location = '/pages/main/index.html'
    } else {
      return spanLogin.innerText = 'Usuário ou senha inválidos'
    }
  } else {
    return spanLogin.innerText = 'Não há usuário cadastrado'
  }
}

/*MODAL*/

const modal = document.querySelector('.modal')
const hidden = document.querySelector('.hidden')

function abrirModal() {
  hidden.style.display = 'flex'
}