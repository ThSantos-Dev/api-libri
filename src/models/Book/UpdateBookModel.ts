import { prismaClient } from "../../database/prismaClient";
import { Book } from "@prisma/client";

interface Data {
  title: string;
  description: string;
  photo: string;
}

export default class UpdateBookController {
  // Atualizar livro
  static async execute(id: number, data: Data): Promise<Book | false> {
    try {
      const updatedBook = await prismaClient.book.update({
        where: { id: id },
        data: {
          ...data,
        },
      });

      return updatedBook;
    } catch (error) {
      console.error(error);
      prismaClient.$disconnect;
      return false;
    }
  }
}
