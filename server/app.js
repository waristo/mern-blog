import express from "express";
import hpp from "hpp";
import mongoose from "mongoose";
import config from "./config";
import helmet from "helmet";
import cors from "cors";

import postsRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import morgan from "morgan";

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));

app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connecting success!!"))
  .catch((e) => console.log(e));

// Use routes
app.get("/");
app.use("/api/post", postsRoutes);
app.use("/api/user", userRoutes);

export default app;
