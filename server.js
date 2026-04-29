require("dotenv").config();

const express = require("express");
const cors = require("cors");

const auth = require("./routes/auth");
const pacientes = require("./routes/pacientes");
const citas = require("./routes/citas");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/pacientes", pacientes);
app.use("/api/citas", citas);

app.listen(process.env.PORT, ()=>{
 console.log("Servidor activo");
});
