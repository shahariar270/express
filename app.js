require('dotenv').config();
const port = process.env.PORT || 3000;
const { default: chalk } = require('chalk');
const app = require('./basic.app');

app.listen(port, () => {
    console.log(chalk.green(`server is running in http://localhost:${port}`));
})
