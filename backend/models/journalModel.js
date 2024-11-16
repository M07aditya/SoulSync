import mongoose from 'mongoose';


const journalSchema = new mongoose.Schema({
    _id: {
        type: String,  // Allow _id to be a string instead of ObjectId
        required: true
      },
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    }, 
    coverPicture: {
        type: String, // This will store the file path
        default: ''
    },
    tags: [{
        type: String
    }]
},
{ timestamps: true });


const Journal = mongoose.model('Journal', journalSchema)
export default Journal;


