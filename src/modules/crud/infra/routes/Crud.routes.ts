import { Router } from 'express'

import CrudCreateController from '@modules/crud/useCases/Create/CrudCreate.controller'

const crudRoutes = Router()

const crudCreateController = new CrudCreateController()

crudRoutes.post('/create', crudCreateController.handle)

export default crudRoutes
