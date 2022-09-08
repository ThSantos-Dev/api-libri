import { prismaClient } from "../../database/prismaClient";

export default class DeleteBookModel {

    static async execute(id: number): Promise<Boolean> {
        try {
            
            const deleted = await prismaClient.book.delete({
                where: {
                    id: id
                }
            })

            console.log(deleted)
            return true

        } catch (error) {
            console.error(error)
            prismaClient.$disconnect
            return false
        }
    }

}