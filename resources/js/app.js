import { Transmit } from '@adonisjs/transmit-client'

const messageContainer = document.querySelector('#messages')
const messageForm = document.querySelector('#message_form')

messageForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const values = new FormData(e.currentTarget)
  void fetch('/messages', { method: 'POST', body: values })

  e.currentTarget.reset()
})

const transmit = new Transmit({
  baseUrl: 'http://localhost:3333',
})

const subscription = transmit.subscription('chats/1')
await subscription.create()

subscription.onMessage(({ message }) => {
  const element = document.createElement('p')
  element.innerText = message

  messageContainer.appendChild(element)
})
