import express from 'express';
import dotenv from 'dotenv';
import { testConnection } from './src/config/database';
import applicationRoutes from './src/routes/applicationRoutes'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const sartServer = async () => {
    await testConnection();
    app.use(express.json());
    app.use('/api', applicationRoutes);    

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }); 
}   
sartServer();