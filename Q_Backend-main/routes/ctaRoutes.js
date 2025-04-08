const express = require("express");
const multer = require("multer");
const CtaImage = require("../models/CtaImage"); // Adjust the path as necessary

const router = express.Router();

// ✅ Configure Multer Storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
router.post("/upload", upload.single("image"), async (req, res) => {
    try {
      console.log(req.file);  // Debugging: Check if file is received
      console.log(req.body);  // Debugging: Check received text data
  
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      const { title, description } = req.body; // Get title & description
  
      const imageUrl = `/uploads/${req.file.filename}`;
      const newImage = new CtaImage({ title, description, imageUrl });
  
      await newImage.save();
      res.status(201).json({ message: "Image uploaded successfully", imageUrl });
    } catch (err) {
      res.status(500).json({ message: "Error uploading image", error: err.message });
    }
  });
  
// ✅ GET Route to Fetch CTA Images
router.get("/", async (req, res) => {
  try {
    const images = await CtaImage.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
});

module.exports = router;