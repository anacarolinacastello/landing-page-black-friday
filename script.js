function cadastroNewsletter() {
  var name = document.getElementById('name')
  var email = document.getElementById('email')

  if (name.value == '' && email.value == '') {
    alert('Preencha os campos.')
    return false
  }
  if (name.value == '') {
    alert('Preencha campo nome.')
    formuser.name.focus()
    return false
  }
  if (email.value == '') {
    alert('Preencha campo email.')
    formuser.email.focus()
    return false
  }
  if (email.value.indexOf('@') == -1) {
    alert('Preencha o email coretamente.')
    formuser.email.focus()
    return false
  }

  var dados = JSON.parse(localStorage.getItem('dadosNewsletter'))
  if (dados == null) {
    localStorage.setItem('dadosNewsletter', '[]')
    dados = []
  }

  dados.push([
    {
      name: name.value,
      email: email.value
    }
  ])

  localStorage.setItem('dadosNewsletter', JSON.stringify(dados))
}