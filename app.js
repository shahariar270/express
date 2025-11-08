const port = 3000;
const app = require('./app.router')

app.listen(port, ()=>{
    console.log(`server is ruing in ${port}`);
})
