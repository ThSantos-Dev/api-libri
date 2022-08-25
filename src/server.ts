import express, { Request, Response } from 'express'

const app = express()

const PORT = 3000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {

  const { ...data } = req.query;

  res.json(data).status(200);
});

app.listen(PORT, (): void => {
  console.log(`A aplicação está rodando em: http://localhost:${PORT} 🚀`);
  return
});
