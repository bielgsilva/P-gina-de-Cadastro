//ESCONDER/MOSTRAR SENHA

const olho = document.querySelector('#olho')

olho.addEventListener('click', function () {
  let inputSenha = document.querySelector('#senha-cadastro')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})


//TROCAR DE TELAS
const mudarTela = document.querySelector('.link')

mudarTela.addEventListener('click', function () {

  window.location = '/pages/login/index.html'

})

/*VALIDACAO DO FORM */
const form = document.querySelector('.form-cadastro')

const userCadastro = document.querySelector('#usuario-cadastro')
const emailCadastro = document.querySelector('#email-cadastro')
const senhaCadastro = document.querySelector('#senha-cadastro')
const spanLogin = document.querySelector('#span-cadastro')

let authenticatedUser = null;

function registerUser() {
  const user = {
    nome: userCadastro.value,
    email: emailCadastro.value,
    senha: senhaCadastro.value
  }
  localStorage.setItem('user', JSON.stringify(user))
  authenticatedUser = user
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()

  if (!userCadastro.value || !senhaCadastro.value || !emailCadastro) {
    return
  }

  registerUser()
  userCadastro.value = ''
  emailCadastro.value = ''
  senhaCadastro.value = ''
  spanLogin.textContent = 'Cadastro efetuado com Sucesso'

})

// Para autenticar o usuário em outra parte do código, basta verificar se o usuário está salvo no localStorage
// e armazenar na variável global authenticatedUser

const savedUser = localStorage.getItem('user')
if (savedUser) {
  authenticatedUser = JSON.parse(savedUser)
}
