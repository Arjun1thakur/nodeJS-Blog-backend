let express = require("express")
let Data = require("./Data")
// console.log(Data)
let app = express()
let Port=3001;
const cors = require('cors');
app.use(cors({origin: '*'}));
app.get('/',(req,res)=>{
    res.json(Data)
})
app.listen(Port,()=>{
    console.log(`Server started on Port ${Port}`)
})