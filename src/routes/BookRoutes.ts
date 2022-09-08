// Import do Router
import { Router } from "express";

// Import da controller de livro
import CreateBookController from "../controllers/Book/CreateBookController";
import DeleteBookController from "../controllers/Book/DeleteBookController";
import FindAllBooksController from "../controllers/Book/FindAllBooksController";
import FindBookByIdController from "../controllers/Book/FindBookByIdController";
import UpdateBookController from "../controllers/Book/UpdateBookController";

// Instanciando o Router
const router = Router();

// Rotas públicas
router.post("/", CreateBookController.execute)
router.get("/", FindAllBooksController.execute);
router.get("/:id", FindBookByIdController.execute);
router.put("/:id", UpdateBookController.execute);
router.delete("/:id", DeleteBookController.execute);

export default router;
