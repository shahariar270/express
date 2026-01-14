const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
const port = 3000
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {

})

app.listen(port, () => {
    console.log('Server is running on', port);
});