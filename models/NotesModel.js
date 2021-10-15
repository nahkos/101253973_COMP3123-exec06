const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NotesModelSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
      noteDescription: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
      priority: {
        type: String,
        // enum: ["HIGH", "LOW", "MEDUIM"],        
      },
      dateAdded: {
        type: Date,            
        default: Date.now
      },
      dateUpdated: {
        type: Date,           
        default: Date.now
      },
});

const NotesModel = mongoose.model("NotesModel", NotesModelSchema);
module.exports = NotesModel;