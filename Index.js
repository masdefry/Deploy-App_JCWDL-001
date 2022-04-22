// Import 
const express = require('express')

// Initialize Express : Library yg Digunakan Untuk Membuat Sebuah API
const app = express() 
app.use(express.json()) // Body Parser : Untuk menerima data dari frontend 

// Initialize Cors
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Digunakan Untuk Informasi Bahwa API Kita Berhasil Dijalankan
app.listen(2000, () => console.log('API Running on Port 2000'))


