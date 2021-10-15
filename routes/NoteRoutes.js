const express = require("express");
const noteModel = require('../models/NotesModel');
const app = express();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post("/note", async (req, res) => {
    // Validate request
    const notes = new noteModel(req.body);

    try {
        await notes.save();
        res.send(notes);
      } catch (err) {
        res.status(500).send(err);
      }
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    const notes = await noteModel.find({});

    //TODO - Write your code here to returns all note
    try {
        res.send(notes);
      } catch (err) {
        res.status(500).send(err);
      }
      if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:id', async(req, res) => {
    // Validate request
    
    //TODO - Write your code here to return onlt one note using noteid
    try {
        const note = await noteModel.findById(req.params.id);
    
        if (!note) res.status(404).send("No item found");
        res.status(200).send(note);
      } catch (err) {
        res.status(500).send(err);
      }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:id', async (req, res) => {
    // Validate request
    
    //TODO - Write your code here to update the note using noteid
    try {
        const note = await noteModel.findByIdAndUpdate(req.params.id, req.body);
    
        if (!note) res.status(404).send("No item found");
        res.status(200).send(note);
      } catch (err) {
        res.status(500).send(err)    
      }   
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:id', async (req, res) => {
    // Validate request
    
    //TODO - Write your code here to delete the note using noteid

    try {
        const note = await noteModel.findByIdAndDelete(req.params.id);
    
        if (!note) res.status(404).send("No item found");
        res.status(200).send("Item has been deleted successfully");
      } catch (err) {
        res.status(500).send(err);
      }
      if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
});

module.exports = app;