import express from "express";
import pegarIpRouter from "./router/pegarEndereco.router.js";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.set("trust proxy", true);

app.use(pegarIpRouter);

app.listen(port, () => console.log(`Server sendo rodado na porta ${port}`));
