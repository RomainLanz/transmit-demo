import transmit from '@adonisjs/transmit/services/main'
import type { HttpContext } from '@adonisjs/core/http'

export default class ChatsController {
  store({ request, response }: HttpContext) {
    transmit.broadcast('chats/1', { message: request.input('message') })

    return response.redirect().back()
  }
}
