const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectDB } = require("./db");
const restaurantsRoutes = require("./routes/restaurants.routes");
const errorHandler = require("./middlewares/error");

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ status: "API Running" }));
app.use("/api/restaurants", restaurantsRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
});
