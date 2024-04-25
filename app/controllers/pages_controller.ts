import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  home({ view }: HttpContext) {
    return view.render('pages/home')
  }
}
