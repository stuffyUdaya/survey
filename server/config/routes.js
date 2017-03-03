var users = require('../controllers/users.js')
var polls = require('../controllers/polls.js')
var options = require('../controllers/options.js')

module.exports = function(app){


  app.post('/new',function(req,res){
    console.log(req);
  users.add(req,res);


  });

  app.post('/check',function(req,res){
    console.log(req);
    users.checklogin(req,res);
  });

app.post('/addpoll',function(req,res){
  console.log(req);
  polls.addpoll(req,res);
});

app.get('/showpolls', function(req,res){
  polls.showpolls(req,res);
});

app.get('/polls/:id',function(req,res){
  console.log(req.params.id);
  polls.showone(req,res);
})

app.post('/addvote/:id',function(req,res){
  console.log(req.params.id);
  options.addvote(req,res);
})

app.delete('/deletepoll/:id',function(req,res){
  console.log(req.params.id);
  polls.deletepoll(req,res);
})


}
