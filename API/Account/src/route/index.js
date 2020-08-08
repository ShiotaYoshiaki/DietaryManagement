import express from 'express';
import login from '../service/login';

const router = express.Router();

router.get('/login/:name?/:pass?', async (req, res) => {
  const param = req.params;
  res.json(await login(param));
});

module.exports = router;

