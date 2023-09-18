
import { Verificarlogin } from "../repository/admrepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get('/loginadm', async (req, resp) => {
  try {
    const credencial = await Verificarlogin();
    resp.json(credencial);
  } catch (err) {
    resp.status(500).json({ error: "Internal server error" });
  }
});

export default endpoints;