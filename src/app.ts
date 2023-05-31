import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

// useing cors
app.use(cors())

// useing parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Whooa!, Our server is up! 🔥🔥')
})

export default app
