const port = 3000;
const app = require('./formData')

app.listen(port, () => {
    console.log(`server is running in ${port}`);
})
