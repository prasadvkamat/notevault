
const express = require("express");
const Note = require("../models/Notes");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        return res.json(notes);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
});

router.post(
    "/addnote",
    fetchuser,
    [
        body("title", "Enter a valid title").isLength({ min: 3 }),
        body("description", "Enter a valid description").isLength({ min: 5 }),
    ],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title,
                description,
                tag,
                user: req.user.id,
            });
            const savedNote = await note.save();
            return res.json(savedNote);
        } catch (error) {
            console.error(error.message);
            return res.status(500).send("Internal Server Error");
        }
    }
);

router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }
        let note = await Note.findById(req.params.id);
        if (!note) {
            // return res.send("first error")
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            // return res.send("second error")
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: newNote },
            { new: true }
        );
        return res.json({ note });
    } catch (error) {
        // return res.json({ note });
        // console.error(error.message);
        // return res.status(500).send("Internal Server Error");
    }
});

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(
            req.params.id
        );
        return res.json({ "success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
