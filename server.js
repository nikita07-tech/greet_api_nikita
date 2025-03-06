const express= require('express');
const app = express();
const cors = require('cors');
 const port =3000;

app.use(cors());
 app.get('/api/greet',(req,res)=> {
    const name= req.query.name;
    if(name){
        return res.json({
            message:`Hello, ${name}! Welcome to younglabs`,
        });
    }else{
        return res.json({error:'name is required'});
    }
 });
 app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);

 });
