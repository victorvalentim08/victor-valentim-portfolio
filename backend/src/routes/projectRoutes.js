import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Rota de projetos funcionando!" });
});

export default router;