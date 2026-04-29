const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/",(req,res)=>{
 db.query("SELECT * FROM pacientes",(err,rows)=>{
   res.json(rows);
 });
});

router.post("/",(req,res)=>{

 const {nombre,telefono,correo}=req.body;

 db.query(
 "INSERT INTO pacientes(nombre,telefono,correo) VALUES(?,?,?)",
 [nombre,telefono,correo],
 ()=> res.json({mensaje:"Paciente agregado"})
 );

});

module.exports = router;
