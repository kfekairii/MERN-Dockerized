import express from "express";
import { connect, model, Schema } from "mongoose";
import { homeRouter } from "./routes/home.routes";

const dtScema = new Schema({ title: String });
const DT = model("DT", dtScema);

connect(
  process.env.DB_URL as any,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database Connected");

    DT.create({ title: "Baah" }).then(() => console.log("object Created"));
  }
);
const app = express();
app.use("/api/v1", homeRouter);

app.listen(3001, () => console.log("Server is running on PORT 3001"));
