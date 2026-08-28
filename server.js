const express = require("express");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
const PORT = 3000;

// Permite recibir información en formato JSON.
app.use(express.json());

// Ruta inicial de prueba.
app.get("/", (req, res) => {
  res.json({
    mensaje: "API MED-BAY funcionando correctamente.",
  });
});

// Rutas relacionadas con autenticación.
app.use("/api", authRoutes);

// Inicia el servidor.
app.listen(PORT, () => {
  console.log(`Servidor MED-BAY activo en http://localhost:${PORT}`);
});