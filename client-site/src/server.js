import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from '../../server-site/routes/auth.route.js';
import { connectDB } from './lib/db.js';


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// route calls

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Reporting from port: ${port}`);
  connectDB()
});

console.log(process.env.PORT);
