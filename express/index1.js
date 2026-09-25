const express=require('express');
const app=express();

let port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res)=>{
    console.log(req);
    res.send({ name:"Ram",age:20

    });
}   );