import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Run on ${port}`));
