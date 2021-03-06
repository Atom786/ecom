const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    })
    .then(con => {
        console.log(`Mongodb Database Connected to Host : ${con.connection.host}`)
    })
}

module.exports = connectDatabase;