const router = require('express').Router();
let login_info = require('../models/login_info');
var bcrypt = require('bcryptjs');
const { uuid } = require('uuidv4');
var salt = bcrypt.genSaltSync(10);

router.get('/get_all_login',(req, res) => {
  login_info.find(function(err,result){
    if(err){
      res.json({status:false,err:err})
    }else{
      res.json({status:true,data:result});
    }
  })
});

router.post('/add',(req, res) => {
  console.log(11,req.body)
  var hash = bcrypt.hashSync(req.body.password, salt);
  var data = {
    user_id:uuid(),
    email:req.body.email,
    password:hash
  }
  login_info.find({email:req.body.email},function(err,result){
    if(err){
      console.log(23,err)
      res.json({status:false,err:err});
    }else{
      console.log(26,result)
      if(result.length > 0){
        res.json({status:true, msg:'Email already Exists !',main_status:false});
      }else{
        const newUser = new login_info(data);
        new login_info();
          newUser.save()
          .then(() => res.json({status:true,msg:'Successfully Added.',data:data,main_status:true}))
          .catch(err2 => {
            console.log(35,err2)
            res.json({status:false,err:err2});
          }
          );
      }
    }
  })
});

module.exports = router;
