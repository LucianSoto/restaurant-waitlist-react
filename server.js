const express = require('express')
const cors = require('cors')
// const { restart } = require('nodemon')
const app = express()
const { pool } = require('./dbConfig') // need to make this file

const PORT = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(PORT, (req, res) => {
  console.log("HELLO, terminal");
})

app.post('/create_customer', (req, res, next) => {
  let { name, phone, size} = req.body
  let errors = []

  if(!name || !phone || !size) {
    errors.push({ message: 'fill all fields'})
  }
  if(errors.length > 0) {
    res.render('Post Creation', { errors })
    alert('input fielt must be empty')
  } else {
      pool.query(
        `SELECT * FROM waitlist_schema.waitlist_table
         WHERE name = $1`, [name], (err, result)=> {
          if(err) {
            throw err
          }
          console.log(result.rows);
          if(result.rows.length !== 0) {
            return res.status(400).json({message: 'Customer already exists'})
          }

          pool.query(
            `INSERT INTO waitlist_schema.waitlist_table 
            (Customer_Name, Phone_Number, Party_size) VALUES ($1, $2, $3)` ,
            [name, phone, size], (err, result) => {
              if(err){
                throw err
              }
              return res.status(200).json({message: 'post created'}), 
              JSON.stringify(req.body)
            }
          )
        }
      )
  }
})