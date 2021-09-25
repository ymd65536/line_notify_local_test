const dotenv = require('dotenv');
const result = dotenv.config();
console.log(process.env.LINE_NOTIFY_ACCESS_TOKEN);