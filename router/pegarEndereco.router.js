import { Router } from "express";
import { pegarEnderecoPorIp } from "../controller/pegarEndereco.controller.js";

export const pegarIpRouter = Router();

pegarIpRouter.get("/", async (req, res) => {
  try {
    let ipDoUsuario =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "";

    console.log(ipDoUsuario);
    console.log(req.ips);

    const pegarEndereco = await pegarEnderecoPorIp(ipDoUsuario);
    res.json({ status: true, Ip: pegarEndereco });
  } catch (error) {
    res.json(error);
  }
});

export default pegarIpRouter;
