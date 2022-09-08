import { Request, Response } from "express";
import FindAllBooksModel from "../../models/Book/FindAllBooksModel";


export default class FindAllBooks {
  static async execute(req: Request, res: Response) {
    const data = await FindAllBooksModel.execute();

    if (!data)
      return res.status(500).json({ message: "Falha ao buscar os livros." });

    return res.status(200).json(data);
  }
}
