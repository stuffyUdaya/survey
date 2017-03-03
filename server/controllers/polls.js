var mongoose = require('mongoose');
var Poll = mongoose.model('Poll')
var Option = mongoose.model('Option');
var User = mongoose.model('User');

module.exports = {

addpoll : function(req,res){
  console.log("request coming to the poll controller", req.body);
  var poll = new Poll({question: req.body.question, user : req.body.user})
  poll.save(function(err,poll){
    if(err){
      console.log("went wrong",err);
      res.json({err:err})

    }
    else{
      var option1 = new Option ({option: req.body.option1, user:req.body.user, question: poll._id})
      option1.save(function(err,option1){
        if(err){
          res.json({err:err, msg:"options need to be greater than 3 characters"})
          console.log("went wrong",err);
        }
        else{
          poll.options.push(option1);
          poll.save(function(err,poll){
            if(err){

              console.log("went wrong",err);
            }
            else{
                var option2 = new Option ({option: req.body.option2, user:req.body.user, question: poll._id})
                option2.save(function(err,option2){
                  if(err){
                                  res.json({err:err ,msg:"options need to be greater than 3 characters"})
                                console.log("went wrong",err);
                            }
                  else{
                    poll.options.push(option2);
                    poll.save(function(err,poll){
                      if(err){

                        console.log("went wrong",err);
                      }
                      else{

                        var option3 = new Option ({option: req.body.option3, user:req.body.user, question: poll._id})
                        option3.save(function(err,option3){

                          if(err){
                              res.json({err:err,msg:"options need to be greater than 3 characters"})
                                      console.log("went wrong",err);
                                    }
                          else{
                            poll.options.push(option3);
                            poll.save(function(err,poll){

                              if(err){
                                console.log("went wrong",err);
                              }
                              else{
                                var option4 = new Option ({option: req.body.option4, user:req.body.user, question: poll._id})
                                option4.save(function(err,option4){
                                  if(err){
                                              res.json({err:err, msg:"options need to be greater than 3 characters"})
                                              console.log("went wrong",err);
                                            }


                                  else{
                                    poll.options.push(option4);

                                    poll.save(function(err,poll){
                                      if(err){
                                        console.log("went wrong",err);
                                      }
                                      else{
                                        res.json({poll:poll});
                                      }


                                    })



                                  }


                                })


                              }

                            })

                          }




                        })



                      }
                })
              }





            })
          }

      })
    }
  })
}
})
},




  //         var option2 = new Option ({option: req.body.option2, user:req.body.user, question: poll._id})
  //         option2.save(function(err,option2){
  //           if(err){
  //             console.log("went wrong",err);
  //           }
  //           else{
  //             poll.options.push(option2);
  //             poll.save();
  //             console.log("option2",option2);
  //             var option3 = new Option ({option: req.body.option3, user:req.body.user, question: poll._id})
  //             option3.save(function(err,option3){
  //               if(err){
  //                 console.log("went wrong",err);
  //               }
  //               else{
  //                 poll.options.push(option3);
  //                 poll.save();
  //                 console.log("option3",option3);
  //                 var option4 = new Option ({option: req.body.option4, user:req.body.user, question: poll._id})
  //                 option4.save(function(err,option4){
  //                   if(err){
  //                     console.log("went wrong",err);
  //                   }
  //                   else{
  //                     poll.options.push(option4);
  //                     poll.save();
  //                     console.log("option4",option4);
  //                     res.json({poll:poll})
  //                   }
  //
  //                 })
  //
  //               }
  //             })
  //
  //         }
  //       })
  //     }
  //     })
  //     console.log("newly created poll",poll._id);
  //   }
  // })


showpolls:   function(req,res){

Poll.find({},function(err,polls){
  if(err){
    console.log("went wrong",err);
  }
  else{
    console.log("polls",polls);
    res.json({polls:polls})
  }
})

},

showone: function(req,res){

Poll.findOne({_id:req.params.id}).populate({path:'options'}).exec(function(err,poll){


if(err){
  console.log("went wrong",err);
}
else{
  console.log("requested polln was", poll);
  res.json({poll:poll});
}



})
// Poll.find({_id: req.params.id},function(err,poll){
//   if(err){
//     console.log("went wrong",err);
//
//   }
//   else{
//     console.log("poll requested was", poll);
//     res.json({poll:poll})
//   }
// })
//




},

deletepoll : function(req,res){
  console.log("poll to be deleted from polls schema",req.params.id);
  Poll.findById(req.params.id).remove(function(err){
                if(err){
                  console.log("some thing wrong",+err);
                }
                console.log("successfully deleted");
                res.json({delted:true})
              })
}








}
