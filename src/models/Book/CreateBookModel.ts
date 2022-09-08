import { Book } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

interface Data {
  title: string;
  description: string;
  photo: string;
}

export default class CreateBookModel {
  // Criar Livro
  static async execute({
    title,
    description,
    photo,
  }: Data): Promise<Book | false> {
    // Tentando criar um Livro
    try {
      const newBook = await prismaClient.book.create({
        data: {
          title,
          description,
          photo,
        },
      });

      prismaClient.$disconnect;

      return newBook;
    } catch (error) {
      console.error(error);

      prismaClient.$disconnect;

      return false;
    }
  }
}