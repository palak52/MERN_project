const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
 
    title: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true
    },
    author: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      published_date: {
        type: Date 
      },
      publisher: {
        type: String
      },
      updated_date: {
        type: Date,
        default: Date.now
      }
    });
    
module.exports = Book = mongoose.model('book', BookSchema);


var user_id = '638f7cdce6fa4638449f25ff';



Book.findByIdAndUpdate(user_id, { title: "REACT" },
function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});

var second_user_id='638f7c83e6fa4638449f25fc';

Book.findByIdAndDelete(second_user_id).then(function(err, docs) {
  if(err){
    console.log(err);
  }
  else{
    console.log("user deleted",docs)
  }
});


