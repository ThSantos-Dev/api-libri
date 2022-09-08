import { Request, Response } from "express";
import FindBookByIdModel from "../../models/Book/FindBookById";


export default class FindBookByIdController {
  static async execute(req: Request, res: Response) {
    // Resgatando o ID da URL
    const { id } = req.params;

    // Buscando o livro pelo ID
    try {
      const data = await FindBookByIdModel.execute(parseInt(id));

      if (!data) throw new Error();

      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Não foi possível localizar o livro." });
      return;
    }
  }
}
