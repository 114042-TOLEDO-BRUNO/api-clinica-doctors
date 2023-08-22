import {Router} from 'express'
import {createDoctor} from '../controllers/doctors.controller.js'



const router = Router()
router.post('/', createDoctor)
export default router