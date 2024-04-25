import { Transmit } from '@adonisjs/transmit-client'

const messageContainer = document.querySelector('#messages')
const messageForm = document.querySelector('#message_form')
const messageInput = document.querySelector('#message')

messageForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const values = new FormData(e.currentTarget)
  void fetch('/messages', { method: 'POST', body: values })

  messageInput.value = ''
})

const transmit = new Transmit({
  baseUrl: window.location.origin,
})

const subscription = transmit.subscription('chats/1')
await subscription.create()

subscription.onMessage(({ message }) => {
  const element = document.createElement('p')
  element.innerText = message

  messageContainer.appendChild(element)
})
