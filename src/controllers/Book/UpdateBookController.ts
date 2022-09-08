import { Request, Response } from "express";
import UpdateBookModel from "../../models/Book/UpdateBookModel";

import validators from "../../utils/validators";

export default class UpdateBookController {
  static async execute(req: Request, res: Response) {
    // Resgatando o ID pela URL
    const { id } = req.params;

    // Validação dos dados
    const data: any = validators.book(req);

    if (data.error) return res.status(400).json({ message: data.message });

    try {
      const updatedBook = await UpdateBookModel.execute(parseInt(id), data);

      if (!updatedBook) throw new Error();

      res
        .status(200)
        .json({ message: "Registro atualizado com sucesso!", updatedBook });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Não foi possível atualizar os dados do livro." });
      return;
    }
  }
}
