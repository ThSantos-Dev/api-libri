import { prismaClient } from "../../database/prismaClient";
import { Book } from "@prisma/client";

export default class FindAllBooksModel {
  // Listar todos os Livros
  static async execute(): Promise<Book[] | false> {
    try {
      // Listando todos os livros
      const books: Book[] = await prismaClient.book.findMany();
      prismaClient.$disconnect;

      return books;
    } catch (error) {
      console.error(error);
      prismaClient.$disconnect;
      return false;
    }
  }
}