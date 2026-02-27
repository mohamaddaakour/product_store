import express from "express"
import "dotenv/config"

import connectionDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());

app.use("/api/products", productRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: err.message || "Server Error"
    });
});

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