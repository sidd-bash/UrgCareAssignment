const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {Pool} = require('pg')
const app = express();
const dotenv = require('dotenv')
dotenv.config()

app.use(cors({origin:'*'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000,()=>{
    console.log('Server is listening at port 8000')
})
const config = {connectionString: process.env.POSTGRES_URL}
const pool = new Pool(config)

app.get('/gameBanners',async (req,res)=>{
    const result = await pool.query('SELECT image, id, name, size from games order by id')
    res.send(result.rows)
})