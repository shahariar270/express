require('dotenv').config();
const port = process.env.PORT || 3000;
const app = require('./middleware');

app.listen(port, () => {
    console.log(`server is running in http://localhost:${port}`);
})
