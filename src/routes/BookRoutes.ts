// Import do Router
import { Router } from "express";

// Import da controller de livro
import BookController from "../controllers/BookController";

// Instanciando o Router
const router = Router();

// Rotas públicas
router.get("/", BookController.getAll);
router.post("/", BookController.create);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);

export default router;
