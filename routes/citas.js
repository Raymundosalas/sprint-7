const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/",(req,res)=>{

 const sql = `
 SELECT citas.id,pacientes.nombre,citas.fecha,citas.hora
 FROM citas
 INNER JOIN pacientes
 ON citas.paciente_id=pacientes.id
 `;

 db.query(sql,(err,rows)=>{
   res.json(rows);
 });

});

router.post("/",(req,res)=>{

 const {paciente_id,fecha,hora}=req.body;

 db.query(
 "INSERT INTO citas(paciente_id,fecha,hora) VALUES(?,?,?)",
 [paciente_id,fecha,hora],
 ()=> res.json({mensaje:"Cita creada"})
 );

});

module.exports = router;
