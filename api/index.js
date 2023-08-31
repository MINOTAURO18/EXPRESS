import express from 'express';
import route from './routes/route.js';
const server = express();
const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`conected in PORT: ${PORT}`);
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use('/characters', route);
