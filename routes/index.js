var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

// create collection
let lopSchema = mongoose.Schema([
name: {
    type: String,
},
numberStudent:{
  type: Number,
},
]);

let Lop = mongoose.model('Lop, lopSchema')

/* GET home page. */
router.get('/', function(req, res, next) {
  Lop.find({}, (error, data)=>{
   console.log('danh sách lớp', data);
res.render('index', {lops: data});
  });
  res.render('index', { title: 'Nguyễn Thuận Hải' });
});
router.get('/form-add', function(req, res, next){
  res.render('form-add', {});
})

router.post('/add', function(req,res, next){
Lop.create(req.body);
res.redirect('/');
});
router.get('/form-update:id', function(req, res, next){
  Lop.findByID(req.params.id, (error, data)=>{
    res.render('form-update', {lop: data})
  })
})

module.exports = router;
