const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  const message = 'Service is running';
  res.send(message.toString());
});

module.exports = router;
