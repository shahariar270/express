const port = 3000;
const app = require('./areaCalculate')

app.listen(port, () => {
    console.log(`server is running in ${port}`);
})
