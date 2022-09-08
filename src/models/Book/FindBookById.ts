import { Book } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

export default class FindBookByIdModel {
  // Buscar livro pelo ID
  static async execute(id: number): Promise<Book | false> {
    try {
      const book = await prismaClient.book.findUniqueOrThrow({
        where: { id: id },
      });

      return book;
    } catch (error) {
      console.error(error);
      prismaClient.$disconnect;
      return false;
    }
  }
}