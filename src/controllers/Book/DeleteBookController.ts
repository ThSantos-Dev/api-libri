import {Request, Response} from "express"
import DeleteBookModel from "../../models/Book/DeleteBookModel"

export default class DeleteBookController {
    static async execute(req: Request, res: Response) {
        // Resgatando o ID passado pela URL
        const {id} = req.params

        // Tentando apagar o livro
        const delected = await DeleteBookModel.execute(parseInt(id))

        // Validando
        if(!delected) 
            return res.status(500).json({message: "Não foi possível apagar o registro."})
        
        return res.status(200).json({message: "Registro apagado com sucesso."})

    }
}