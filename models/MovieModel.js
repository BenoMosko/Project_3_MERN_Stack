const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    Name: String, 
    Year_Premiered : Date,
    Genres : [String],
    Image : String
  
});

module.exports = mongoose.model('Movies', MovieSchema, 'Movies');
