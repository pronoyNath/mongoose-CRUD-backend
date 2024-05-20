import express from 'express';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);

export const ProductRoutes = router;