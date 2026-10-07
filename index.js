const express=require('express')
const app=express();
const port=4000;

app.get('/',(req,res)=>
{
    res.send('Hello world!')
})
app.get('/twitter',(req,res)=>
{
    res.send("Hi Sapna")

})
app.listen(process.env.PORT,()=>
{
    console.log(`Example app listening on port ${port} `);
})