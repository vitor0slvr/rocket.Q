import Modal from './modal'
//

const modal = Modal()

const modalTittle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventlistener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', handleClick(event, (check = false))
})

function handleClick(event, check = true) {
  modalTittle.innerHTML = check ? "Marcar como lido" : "Excluir essa pergunta"
  modal.open()
}
