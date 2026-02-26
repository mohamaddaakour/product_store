import express from "express"
import "dotenv/config"

import connectionDB from "./config/db.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

const startServer = async () => {
    try {
        await connectionDB();

        app.listen((PORT), () => {
            console.log(`Listening on port ${PORT}`);
        })
    } catch (error) {
        console.error(`Server error: ${error.message}`);
        process.exit(1);
    }
}

startServer();