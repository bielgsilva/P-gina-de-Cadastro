//esconder palavra da senha 
let mostrarSenha = document.getElementById('olho')

mostrarSenha.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')

  }
})

