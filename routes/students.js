const express = require('express');
const app = express();
const mysqlConnection = (require('../connect'));

//Rutas

//principal- consulta general
app.get('/all', (req, res) => {
    const sql = 'SELECT * FROM estudiantes';
    mysqlConnection.query(sql, (error, results) =>{
      if (error) {
        return error;
      }
      if(results.length > 0){
      res.json(results);
      }else {
        res.send('No hay resultados');
      }
    });
    });
  
  //Consulta especifica
  app.get('/search/:id', (req, res) => { 
   const { id } = req.params;
    const sql = `SELECT * FROM estudiantes WHERE id = ${id}`;
    mysqlConnection.query(sql, (error, result) =>{
      if (error) {
        return error;
      }
      if(result.length > 0){
      res.json(result);
      }else {
        res.send('No hay resultados');
      }
    });
  });
  
    //Agregar
    app.post('/add', (req, res) =>{
   const sql = 'INSERT INTO estudiantes SET ?';
   const students = {
      nombre: req.body.nombre,  
      apellido: req.body.apellido,
      carrera: req.body.carrera
   }
   mysqlConnection.query(sql, students,(error)=>{
    if (error) {
      return error;
    } else {
      res.send('Datos almacenados');
    }
   });
    });
  
    //actualizar
    app.put('/update/:id', (req, res) =>{
      const {id} = req.params;
      const {nombre, apellido, carrera} = req.body;
      if (nombre != "" || apellido != "" || carrera != "") {
      const sql = `UPDATE estudiantes SET nombre = '${nombre}', apellido = '${apellido}', carrera = '${carrera}' WHERE id = ${id}`;
      mysqlConnection.query(sql, (error)=>{
        if (error) {
          return error;
        } else {
          res.send('Datos actualizados');
        }
       });
    }else{
      res.send('Todos los campos son necesarios');
    }
    });
    //eliminar
    app.delete('/delete/:id', (req, res) =>{
      const {id} = req.params;
      const sql = `DELETE FROM estudiantes WHERE id = ${id}`;
      mysqlConnection.query(sql, (error)=>{
        if (error) {
          return error;
        } else {
          res.send('Datos eliminados');
        }
       });
    });

    module.exports = app;