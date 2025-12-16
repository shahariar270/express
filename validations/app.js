const { default: chalk } = require('chalk');
const express = require('express');
const morgan = require('morgan');
const router = require('./router/router');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.status(200).json({
        massage: 'you hit test endpoint'
    })
})

//mongo connect
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log(chalk.green.bold('MongoDB connected successfully'));
  })
  .catch((err) => {
    console.error(chalk.red.bold('MongoDB connection failed ❌'));
    console.error(err.message);
  });



app.use('/auth/', router);


app.listen(port, () => {
    console.log(chalk.blue.bold.italic(`server ruing at ${port}`));
})
