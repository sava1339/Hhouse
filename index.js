const path = require('path');
const fs = require('fs');
const http = require('http')
const express = require('express');
const app = express();
const mysql = require('mysql2')

app.get('/target/',(req,res)=>{
    const house = [req.query.homeName,req.query.homePrice,req.query.homeM,req.query.homeCountry,req.query.homeRegion,req.query.homeTown,req.query.inputTel]
    const addToValue = ()=>{
        connection.execute(sql,house, (err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`добавлено в базу данных!`)
            }
        })
    }
    addToValue()
})

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    database:"Houses",
    password:"Ysavely1229Ysavely1339"
})
connection.connect((err)=>{
    if(err){
        console.log(`Ошибка с подключением к базе!!!: ${err}`)
    }else{
        console.log('Подключена База!!!')
    }
})
const sql = "INSERT INTO House (houseName,priceData,houseM,houseCountry,houseRegion,houseTown,houseTel) VALUE (?,?,?,?,?,?,?)"

connection.execute("SELECT * FROM House", (err,results)=>{
    if(err){
        console.log(err)
    }else{
        
    }
})

app.use(express.static('public'));

const PORT = 3000

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => console.info(`Сервер запущен.. ${PORT}`))