const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
//Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts
const cors = require('cors');//Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources
const path = require('path');

//user
const User = require('./Routes/Users');

const app = express();

app.use(cors({origin : '*'}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const con = mysql.createConnection({ 
  host: "127.0.0.1",
  user: "root",
 // password: "5747723",
  database: "app_react_node"
});

con.connect(function(err){
    if(err) throw err;
})

//con.on('error',() => console.log('err'));

// var del = con._protocol._delegateError;
// con._protocol._delegateError = function(err, sequence){
//   if (err.fatal) {
//     console.trace('fatal error: ' + err.message);
//   }
//   return del.call(this, err, sequence);
// };

//this function allows users to visit this path

app.use('/images',express.static(path.join(__dirname,'images')))
app.use('/',express.static(path.join(__dirname,'react')))

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'react', 'index.html'))
// })

//api

app.use('/api/users',User);

//port
const PORT = process.env.PORT || 4000;

//run the server
app.listen(PORT , () => console.log(`app listen on port ${PORT}`))


