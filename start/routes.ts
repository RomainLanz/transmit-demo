/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ChatsController = () => import('#controllers/chats_controller')
const PagesController = () => import('#controllers/pages_controller')

router.get('/', [PagesController, 'home'])
router.post('messages', [ChatsController, 'store']).as('submit.message')
