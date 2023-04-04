const moment = require("moment");

const date = moment().format("dddd, MMMM Do YYYY");
console.log(date);
console.log(moment("19760926").fromNow())