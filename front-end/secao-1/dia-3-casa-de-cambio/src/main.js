import Swal from 'sweetalert2'

const $button = document.querySelector('button')

$button.addEventListener('click', () => {
  const flexContainer = document.querySelector('.flex-container')

  flexContainer.innerHTML = ''

  const $input = document.querySelector('input')

  const moeda = $input.value

  const apiUrl = `https://economia.awesomeapi.com.br/json/daily/${moeda}/30`

  if (moeda.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar uma moeda'
    })
  } else {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('A moeda não existente!')
          } else {
            throw new Error('Erro na solicitação da API')
          }
        }
        return response.json()
      })
      .then(data => {
        document.querySelector('h3').innerText = `Valores referentes a 1 ${moeda} em relação ao REAL nos últimos 30 dias.`
        console.log(data)
        for (let index = 0; index < data.length; index += 1) {
          const $box = document.createElement('div')
          $box.className = 'box'
          const valueUnformated = parseFloat(data[index].ask)
          const valueFormated = valueUnformated.toFixed(2)
          $box.innerText = `R$ ${valueFormated}`
          flexContainer.appendChild($box)
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message
        })
      })
  }
})
