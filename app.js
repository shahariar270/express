const port = 3000;
const app = require('./basic.app')

app.listen(port, ()=>{
    console.log(`server is ruing in ${port}`);
})
