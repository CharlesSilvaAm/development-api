import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()
app.use(express.json())

app.use('/', publicRoutes)


app.listen(3001, () => console.log("Servidor Rodando 🚀"))

// usuario: charles
// senha: 2bsvpnwTN77uvKfZ
// mongodb+srv://charles:2bsvpnwTN77uvKfZ@usersapidev.l4vph.mongodb.net/?retryWrites=true&w=majority&appName=UsersAPIDev