// const express = require("express");
// const Note = require("../models/Notes");
// const router = express.Router();
// var fetchuser = require("../middleware/fetchuser");
// const { body, validationResult } = require("express-validator");

// //Route 1 to fetch all the users notes who is currently logged in using get reqest for the path/api/auth/fetchallnotes //login required //
// router.get("/fetchallnotes", fetchuser, async (req, res) => {
//     try {
//         const notes = await Note.find({ user: req.user.id });
//         res.json(notes);
//     } catch (error) {
//         console.error(error.message);
//         // res.status(500).send("Internal Server Error");
//     }
// });

// //Route 2 to add a note into the database using the token for verification using the post request to the path api/auth/addnote //login required//
// router.post(
//     "/addnote",
//     fetchuser,
//     [
//         body("title", "Enter a valid title").isLength({ min: 3 }),
//         body("description", "enter a valid description").isLength({ min: 5 }),
//     ],
//     async (req, res) => {
//         try {
//             const { title, description, tag } = req.body;
//             const errors = validationResult(req);
//             if (!errors.isEmpty()) {
//                 // return res.status(400).json({ errors: errors.array() });
//             }
//             const note = new Note({
//                 title,
//                 description,
//                 tag,
//                 user: req.user.id,
//             });
//             const savedNote = await note.save();
//             // res.json(savedNote);
//         } catch (error) {
//             console.error(error.message);
//             // res.status(500).send("Internal Server Error");
//         }
//     }
// );

// //Route 3 to update the existing note using put request by /api/notes/updatenote //login required//
// router.put("/updatenote/:id", fetchuser, async (req, res) => {
//     const { title, description, tag } = req.body;
//     //creattion of new note using the above details
//     try {
//         const newNote = {};
//         if (title) {
//             newNote.title = title;
//         }
//         if (description) {
//             newNote.description = description;
//         }
//         if (tag) {
//             newNote.tag = tag;
//         }
//         //finding the node to be updated using the params id
//         let note = await Note.findById(req.params.id);
//         if (!note) {
//             // return res.status(404).send("Not Found");
//         }
//         //now verifiying if the note user is trying to change actually belongs to that user or no using the note.user which contain the users id
//         if (note.user.toString() !== req.user.id) {
//             // return res.status(401).send("Not Allowed");
//         }
//         note = await Note.findByIdAndUpdate(
//             req.params.id,
//             { $set: newNote },
//             { new: true }
//         );
//         // res.json({ note });
//     } catch (error) {
//         console.error(error.message);
//         // res.status(500).send("Internal Server Error");
//     }
// });

// //Route 4 for deletion of the note using DELETE in the endpoint api/notes/deletenode //login required//
// router.delete('/deletenote/:id', fetchuser, async (req, res) => {
//     //finding the node to be updated using the params id
//     try {
//         let note = await Note.findById(req.params.id);
//         if (!note) {
//             // return res.status(404).send("Not Found");
//         }
//         //now verifiying if the note user is trying to change actually belongs to that user or no using the note.user which contain the users id
//         if (note.user.toString() !== req.user.id) {
//             // return res.status(401).send("Not Allowed");
//         }
//         note = await Note.findByIdAndDelete(
//             req.params.id
//         );
//         // res.json({ "success": "note has been deleted", note: note });
//     } catch (error) {
//         console.error(error.message);
//         // res.status(500).send("Internal Server Error");
//     }
// })
// module.exports = router;
// 
// const express = require("express");
// const Note = require("../models/Notes");
// const router = express.Router();
// var fetchuser = require("../middleware/fetchuser");
// const { body, validationResult } = require("express-validator");

// // Route 1 to fetch all the users notes who is currently logged in using GET request for the path /api/auth/fetchallnotes (login required)
// router.get("/fetchallnotes", fetchuser, async (req, res) => {
//     try {
//         const notes = await Note.find({ user: req.user.id });
//         return res.json(notes);
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).send("Internal Server Error");
//     }
// });

// // Route 2 to add a note into the database using the token for verification using the POST request to the path /api/auth/addnote (login required)
// router.post(
//     "/addnote",
//     fetchuser,
//     [
//         body("title", "Enter a valid title").isLength({ min: 3 }),
//         body("description", "Enter a valid description").isLength({ min: 5 }),
//     ],
//     async (req, res) => {
//         try {
//             const { title, description, tag } = req.body;
//             const errors = validationResult(req);
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({ errors: errors.array() });
//             }
//             const note = new Note({
//                 title,
//                 description,
//                 tag,
//                 user: req.user.id,
//             });
//             const savedNote = await note.save();
//             return res.json(savedNote);
//         } catch (error) {
//             console.error(error.message);
//             return res.status(500).send("Internal Server Error");
//         }
//     }
// );

// // Route 3 to update the existing note using PUT request to /api/notes/updatenote (login required)
// router.put("/updatenote/:id", fetchuser, async (req, res) => {
//     const { title, description, tag } = req.body;
//     try {
//         const newNote = {};
//         if (title) {
//             newNote.title = title;
//         }
//         if (description) {
//             newNote.description = description;
//         }
//         if (tag) {
//             newNote.tag = tag;
//         }
//         let note = await Note.findById(req.params.id);
//         if (!note) {
//             return res.status(404).send("Not Found");
//         }
//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not Allowed");
//         }
//         note = await Note.findByIdAndUpdate(
//             req.params.id,
//             { $set: newNote },
//             { new: true }
//         );
//         return res.json({ note });
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).send("Internal Server Error");
//     }
// });

// // Route 4 for deletion of the note using DELETE request to /api/notes/deletenote (login required)
// router.delete('/deletenote/:id', fetchuser, async (req, res) => {
//     try {
//         let note = await Note.findById(req.params.id);
//         if (!note) {
//             return res.status(404).send("Not Found");
//         }
//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not Allowed");
//         }
//         note = await Note.findByIdAndDelete(
//             req.params.id
//         );
//         return res.json({ "success": "Note has been deleted", note: note });
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).send("Internal Server Error");
//     }
// });

// module.exports = router;

//ai code
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
