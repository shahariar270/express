const { default: chalk } = require('chalk');
const express = require('express');
const morgan = require('morgan');
const router = require('./router/router');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())

const port = 3000


app.get('/', (req, res) => {
    res.status(200).json({
        massage: 'you hit test endpoint'
    })
})

app.use('/auth/', router);


app.listen(port, () => {
    console.log(chalk.blue.bold.italic(`server ruing at ${port}`));
})
