import express from 'express';
import getOneFood from '../service/getOneFood';

const router = express.Router();

router.get('/only/:id?', async (req, res) => {
  const param = req.params;
  res.json(await getOneFood(param));
});

module.exports = router;

