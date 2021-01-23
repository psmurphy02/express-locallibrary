var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
        summary: {type: String, required: true},
        isbn: {type: String, required: true},
        genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
    }    //ObjectId used to pull in info from other model
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function () {
    return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Book', BookSchema);