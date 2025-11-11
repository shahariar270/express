const port = 3000;
const app = require('./route_parameter')

app.listen(port, () => {
    console.log(`server is running in ${port}`);
})
