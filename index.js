import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/status", (req, res) => {
  res.json({ status: "ok", service: "DataJud CNJ Proxy" });
});

app.get("/datajud", async (req, res) => {
  try {
    const API_KEY = process.env.DATAJUD_API_KEY;
    const { tribunal, classe, assunto, pagina } = req.query;

    let url = "https://datajud.cnj.jus.br/api_publica/cnj/proc?";

    if (tribunal) url += `&tribunal=${encodeURIComponent(tribunal)}`;
    if (classe) url += `&classe=${encodeURIComponent(classe)}`;
    if (assunto) url += `&assunto=${encodeURIComponent(assunto)}`;
    if (pagina) url += `&pagina=${encodeURIComponent(pagina)}`;

    const response = await fetch(url, {
      headers: {
        "Authorization": `APIKey ${API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Erro ao consultar DataJud CNJ" });
    }

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
