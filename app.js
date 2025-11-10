const port = 3000;
const app = require('./query.parameter')

app.listen(port, ()=>{
    console.log(`server is running in ${port}`);})
