const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));




app.get('/tracking.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/tracking.js'));
});
app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/data.json'));
});
app.get('/winnings.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/winnings.js'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/main.js'));
});
app.get('/dpl_logo.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/dpl_logo.jpg'));
});
app.get('/EZHANDCALC.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/EZHANDCALC.jpg'));
});
app.get('/calculator.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/calculator.js'));
});
app.get('/winningData', (req, res) => {
  res.sendFile(path.join(__dirname, '/data.json')); // Provide the correct path to your JSON file here
});
app.get('/ipadress.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/ipadress.js'));
});
app.get('/troll.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/troll.png'));
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
