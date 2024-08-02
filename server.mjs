import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

// Ruta de ejemplo
app.get("/api/data", (req, res) => {
  res.json({ message: "Hola desde el servidor Node.js!" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
