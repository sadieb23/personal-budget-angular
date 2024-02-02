const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static('public'));

// Function to read budget data from the JSON file
const readBudgetData = () => {
    const jsonFilePath = path.join(__dirname, 'budget-data.json');
    try {
        const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error(`Error reading JSON file: ${error.message}`);
        return {};
    }
};

app.get('/budget', (req, res) => {
    const budgetData = readBudgetData();
    res.json(budgetData);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
