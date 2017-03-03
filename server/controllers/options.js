var mongoose = require('mongoose');
var Poll = mongoose.model('Poll')
var Option = mongoose.model('Option');
var User = mongoose.model('User');

module.exports = {

addvote: function(req,res){
  Option.findOneAndUpdate({_id:req.params.id}, { $inc: { vote: 1 }},{new:true},function(err,votes){
              if(err){
                console.log("went wrong");
              }

              console.log("option",votes)
              res.json({vote:votes})
            })
}





}
