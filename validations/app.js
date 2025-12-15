const { default: chalk } = require('chalk');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

const port = 3000


app.get('/', (req, res) => {
    res.status(200).json({
        massage: 'you hit test endpoint'
    })
})


app.listen(port, () => {
    console.log(chalk.blue.bold.italic(`server ruing at ${port}`));
})
