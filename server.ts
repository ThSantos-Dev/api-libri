import express, { Request, Response } from 'express'

const app = express()

const PORT = 3000 || process.env.PORT;

// Configurando o express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Configurando rotas
import BookRoutes from './src/routes/BookRoutes'

app.use('/books', BookRoutes)

app.listen(PORT, (): void => {
  console.log(`A aplicação está rodando em: http://localhost:${PORT} 🚀`);
  return
});
