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

function mudandoTela() {

  document.querySelector(".card-login").style.display = "none";
  document.querySelector(".card-cadastro").style.display = "block";
}

mudarTela.onclick = mudandoTela;

/*VALIDACAO DO FORM */
const form = document.querySelector('.form-cadastro')

const userCadastro = document.querySelector('#usuario-cadastro')
const emailCadastro = document.querySelector('#email-cadastro')
const senhaCadastro = document.querySelector('#senha-cadastro')
const spanLogin = document.querySelector('.card-cadastro span')

async function registerUser() {
  const response = await api.post('/usuarios', {
    nome: userCadastro.value,
    email: emailCadastro.value,
    senha: senhaCadastro.value
  })
  console.log(response)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()

  if (!userCadastro.value || !senhaCadastro.value || !emailCadastro) {
    return
  }

  registerUser()

})

