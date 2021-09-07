const mysql = require('mysql');
const express = require('express');
const jwt = require('jsonwebtoken');
//securely transfer information between two parties.

const router = express.Router();
//routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.
const multer = require("multer"); // this packege for image upload
//Multer is an npm package that makes it easy to handle file uploads



// code for image upload start
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "images");
   
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});
// end code for image upload 

// secret 
const jwtPrivateSecret = 'newprivatesecret';

// connect  
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
   // password: "5747723", 
    database: "app_react_node"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// end

// secret 
// const jwtPrivateSecret = 'newprivatesecret';

// // config data 
// const DB_NAME = require('../config/data').DB_NAME;
// const HOST = require('../config/data').HOST;
// const DB_SECRET = require('../config/data').DB_SECRET;
// const USER_NAME = require('../config/data').USER_NAME;

// //end of


// // Connect To DB
// const con = mysql.createConnection({
//     host:HOST,
//     user:USER_NAME,
//     password:DB_SECRET,
//    // database:'app_react_node'
//     database:DB_NAME,
//     connectionLimit:50,
//     queueLImit:50,
//     waitForConnection:true
// })

// con.connect(function(err){
//     if(err) throw err;
//     console.log('connected!', err)
//   })
  
//   con.on('error', ()=> console.log('err'))
    
//   var del = con._protocol._delegateError;
//   con._protocol._delegateError = function(err, sequence){
//     if (err.fatal) {
//       console.trace('fatal error: ' + err.message);
//     }
//     return del.call(this, err, sequence);
//   };
  

// con.connect(function(err){
//     if(err) throw err;
//     console.log('connected')
// })

function SelectOrCreateUser(){
    con.query('SELECT * FROM users',function(err,result,fields){
        if (err){
            const sql = 'CREATE TABLE users (id INT Auto_INCREMENT PRIMARY KEY,name VARCHAR(255),password VARCHAR(255),pic VARCHAR(255),email VARCHAR(255) Not Null UNIQUE,address VARCHAR(255))';
            con.query(sql,function(err,result){
                if(err) throw err;
            });
        }

    })
}

SelectOrCreateUser();

//create new user

//first check that email is exist or not then create new user
router.post('/Register',async (req,res) => {
    const email = req.body.Data.email;
    const pass = req.body.Data.password;
    const name= req.body.Data.name;

    con.query(`SELECT * FROM users WHERE email= '${email}'`, function(err,result){
        if(err){
            res.send({err:'err'})
        }
        if(result.length === 0){
            var sql = `INSERT INTO users (name,email,password) VALUES ('${name}','${email}','${pass}')`
            con.query(sql, function(err,result){
                if(err){ throw err; }
                res.status(200).send({result})
                console.log(result)
            })
        }
        else{
            return res.status(201).send({ message:'this email is already taken'})
        }
    })


})

const JwtPrivateSecrt = 'Jay#React';

router.post('/Login',async (req , res) => {
    email =req.body.Data.email;
    pass = req.body.Data.password;

    // email =req.body.email;
    // pass = req.body.password;

    con.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${pass}'`,
    async function (err,result){
        if(result.length !==0){
            jwt.sign({UserEmail:email}, JwtPrivateSecrt,
                (err,token) =>{
                    res.status(200).send({token:token})
                })
        }
        if(result.length ===0){
            res.status(400).send({message:'error not found'})
        }
    })
})



// get user data 
router.get('/GetUserData', async (req, res)=> {

    const token = req.headers['authorization'];
    
    var decoded = jwt.decode(token, {complete: true});
    const payload = decoded.payload;
    const UserE = payload.UserEmail;
    console.log('userdat', UserE);
   
    const thesql = `Select * FROM users  WHERE email = '${UserE}'`;
    con.query(thesql,  function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      res.send({ result })
    });  //  res.send({ mes: req.headers['authorization']} )
   });
     
  
  
  //UPDATA USER DATA ( name pic address )  
  const upload = multer({ 
    storage: storage ,
    limits: { fieldSize: 12 * 1024 * 1024 } 
    }).single("image");
  
  
    router.put('/edit/:id' , upload, (req, res,next ) => {
  
      if (req.file && req.file !=='') {
         const Id = req.params.id;
         const url =  req.protocol + "://" + req.get("host");
         const pic =  url + "/images/" + req.file.filename;
         const name = req.body.name; 
         const address = req.body.address; 
         // updata with mysql
         const Sqql = `UPDATE users SET name = '${name}', address = '${address}', pic = '${pic}' WHERE id = '${Id}'`;
          con.query(Sqql,  function (err, result) {
           if (err) throw err;
           console.log(result.affectedRows + " record(s) updated");
           res.status(200).send({ message:'succsful updata' })
         });        
   
        } 
        else {
   
         const Id = req.params.id;  
         const name = req.body.name;
         const address = req.body.address;
         // updata with mysql
         const Sqql = `UPDATE users SET name = '${name}', address = '${address}' WHERE id = '${Id}'`;
         con.query(Sqql,  function (err, result) {
           if (err) throw err;
           console.log(result.affectedRows + " record(s) updated");
           res.status(200).send({ message:'succsful updata' })
         });  
        }
       }    
     );
    
  
  // delete one User 
  
  router.delete('/delete/:id/:password' , (req, res,next ) => {
  
    const Id = req.params.id;
    const pass = req.params.password;
  
    con.query(`SELECT * FROM users WHERE id = '${Id}' AND  password = '${pass}' `,
    async function (err, result) {
        if(result.length  !== 0 ){
          // the password is correct
          con.query(`DELETE FROM users WHERE id = '${Id}'`,
          async function (err, result ) {
            if (err) throw (err);
            res.status(200).send({message:result})
          })
        }
        if(result.length  === 0){
          res.status(400).send({message:'error the password is not correct'});
          console.log('err', err)
        }
       });  
      
     }    
   );




module.exports = router;
