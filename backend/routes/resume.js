const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/download', (req, res) => {
  // Assuming the resume PDF is placed in the backend's root or 'public' folder
  const resumePath = path.join(__dirname, '../resume.pdf');
  
  // Check if file exists to prevent server crashing on file not found
  if (fs.existsSync(resumePath)) {
    res.download(resumePath, 'Atharav_Tyagi_Resume.pdf', (err) => {
      if (err) {
        console.error('Error serving resume:', err);
        res.status(500).send('Error downloading file');
      }
    });
  } else {
    // Graceful fallback or error msg
    res.status(404).json({ error: 'Resume file not found. Please setup resume.pdf in backend directory.' });
  }
});

module.exports = router;
