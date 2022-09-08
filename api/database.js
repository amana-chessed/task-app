const mongoose = require('mongoose');
let conn = mongoose.connection;

mongoose.connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    err => {
      console.log(err!=null?err:"No errors");
  },
);

conn.on('connected', function() {
    console.log('database connected successfully');
});
conn.on('disconnected',function(){
    console.log('database disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;