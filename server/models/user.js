var mongoose       = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({

      name: {
        first: {
          type: String,
          required: [true, "User First Name required"],
          trim: true,
        },
        last: {
          type: String,
          required: [true,"User Last Name required"],
          trim: true,
        },
      },


      email: {
        type: String,
        unique:true,
        validate: [{
          validator: function( email ) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( email );
          },
          message: "email you entered is not a valid email"
        }
            ],
        required: [true, "User email required"]
      },







      password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 256,
        validate: [{
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      ],
      },

      bday: {
        type:Date,
        required:true

      },

      username: {
        type: String,
        unique: [true, "username must be unique"],
        validate: [{
          validator: function( username ) {
            return /^[A-Za-z0-9-_]{4,20}/.test( username );
          },
          message: "username failed validation, It should be an alphanumeric character"
        }
      ],
      required: [true, "User email required"]
    },

    


      }, {timestamps:true});


      UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

//Checking whether the password is valid or not

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};



UserSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});


    mongoose.model('User', UserSchema);


// customerSchema.virtual( 'name.full' ).get( function () {
//   return this.name.first + " " + this.name.last;
//   // return `${ this.name.first } ${ this.name.last}`;
// });
