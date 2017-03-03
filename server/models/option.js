var mongoose       = require('mongoose');
// var Message = mongoose.model('Message')
var Schema = mongoose.Schema;

var OptionSchema = new mongoose.Schema({

  option: {
    type: String,
    required: true,
    minlength:3,
  },
  user:{
    id: String,
    name: String
  },

  question: {type: Schema.Types.ObjectId, ref: 'Question'},


vote : {value: Number},

},
{timestamps: true});










mongoose.model('Option', OptionSchema);
