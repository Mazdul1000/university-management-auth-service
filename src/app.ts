import express, { Request, Response } from 'express'
import cors from 'cors'

import usersService from './app/modules/user/users.service'
import userRouter from './app/modules/user/users.route'

const app = express()

// useing cors
app.use(cors())

// useing parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// test route

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('Whooa!, Our server is up! 🔥🔥')
})

// user routes
app.use('/api/v1/users', userRouter)

export default app
