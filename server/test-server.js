import express from 'express';

const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.json({ test: 'working' });
});

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
});
