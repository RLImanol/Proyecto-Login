import express, { response } from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express()
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'
})

app.post('/register', (req, res) =>{
    const sql = "INSERT INTO login (`name`,`email`,`password`) Values (?)" ;
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]

    db.query(sql,[values], (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
    // bcrypt.hash(req.body.password.toString(), salt, (err, hash) =>{
    //     if(err) return res.json({Error: "Error for hassing password"})
    //     const values = [
    //         req.body.name,
    //         req.body.email,
    //         hash
    //     ]

        // db.query(sql, [values], (err, result) =>{
        //     if(err) return res.json({Error: "Inserting data Error in server"});
        //     return res.json({Status: "Success"})
        // })
    })
   


    
app.post('/login', (req, res) =>{
    const sql = 'SELECT * FROM login WHERE email = ?';
    const values = [
        req.body.email,
        req.body.password,
    ]

    db.query(sql,[values], (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

// app.use('/login', (req, res) =>{
//     const sql = 'SELECT * FROM login WHERE email = ?';
//     db.query(sql, [req.body.email], (err, data) => {
//         if(err ) return res.json({Error: "Login error"});
//         if(data.length > 0) {
//             bcrypt.compare(req.body.password.toString(), data[0].password, (err,response) => {
//                 if(err) return res.json({Error: "Password compare error"});
//                 if(response){
//                     return res.json({Status: "Success"})
//                 } else {
//                     return res.json({Error: "Password not matched"});
//                 }
//             })
//         } else {
//             return res.json({Error: "No email existed "});
//         }
//     })
// })

app.listen(5000, () =>{
    console.log('Escuchandoo...')
})
