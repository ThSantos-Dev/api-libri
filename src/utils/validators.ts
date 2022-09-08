
import { Request } from "express";

interface IData {
    title: String,
    description: String,
    photo: String
}

interface IError {
    error: Boolean,
    message: String
}


export default class Validators {
  static book(req: Request): IData | IError  {
    const { title, description, photo }: IData = req.body;

    // Validando se os dados foram enviados corretamente
    if (!title)
       return {error: true, message: "O título é obrigatório!"}

    if (!description)
       return {error: true, message: "A descrição é obrigatória!"}

    if (!photo)
       return {error: true, message: "A foto é obrigatória!"}

    return {title, description, photo}
  }
}
