import express from 'express';
import { getCountries } from "./controllers.js";

const router = express.Router();

router.get('/', getCountries)
// router.post('/', createStudent);
// router.get('/:id', getStudentById);
// router.delete('/:id', deleteStudent);
// router.put('/:id', updateStudent);

export default router;