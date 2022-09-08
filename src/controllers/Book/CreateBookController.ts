import { Request, Response } from "express";
import CreateBookModel from "../../models/Book/CreateBookModel";


import validators from "../../utils/validators";

export default class CreateBookController {
  static async execute(req: Request, res: Response) {
    // Validando se os dados foram enviados corretamente
    const data: any = validators.book(req);

    if (data.error) return res.status(400).json({ message: data.message });

    // Tentando criar o Livro
    try {
      // Criando o Livro
      const newBook = await CreateBookModel.execute(data);

      // Se não for retornado um livro, lanço um erro
      if (!newBook) throw new Error();

      // Retornando o Livro cadastrado
      res.status(201).json({
        message: "Livro cadastrado com sucesso!",
        newBook,
      });
      return;
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Não foi possível cadastrar o livro, tente novamente mais tarde!",
      });
    }
  }
}
