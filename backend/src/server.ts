import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend is running',
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
