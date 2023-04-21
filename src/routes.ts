import { Router } from 'express'
import { RoomController } from './controllers/RoomController'


const routes = Router()
routes.get('/room', new RoomController().create)

export default routes
