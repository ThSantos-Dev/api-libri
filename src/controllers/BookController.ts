// Importando intefaces do Express
import { Book } from "@prisma/client";
import { Request, Response } from "express";

// Importando a instancia do prisna client
import { prismaClient } from "../database/prismaClient";

export default class BookController {
  static async getAll(req: Request, res: Response) {
    res.status(200).json({ message: "GetAll" });
  }

  static async create(req: Request, res: Response) {
    // Resgatando os dados do body
    const { title, description, photo }: Book = req.body;

    // Validando se os dados foram enviados corretamente
    if (!title)
      return res.status(400).json({ message: "O título é obrigatório!" });

    if (!description)
      return res.status(400).json({ message: "O título é obrigatório!" });

    if (!photo)
      return res.status(400).json({ message: "O título é obrigatório!" });

    // Tentando criar o Livro
    try {
      // Criando o Livro
      const newBook = await prismaClient.book.create({
        data: {
          title,
          description,
          photo,
        },
      });

      // Retornando o Livro cadastrado
      res.status(201).json({ message: "Livro cadastrado com sucesso!", newBook});
      
      return prismaClient.$disconnect

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Não foi possível cadastrar o livro, tente novamente mais tarde!",
      });

      return prismaClient.$disconnect
    }
  }

  static async update(req: Request, res: Response) {
    res.status(200).json({ message: "Update!" });
  }

  static async delete(req: Request, res: Response) {
    res.status(200).json({ message: "Delete!" });
  }
}
