const express = require('express');
const { LocalStorage } = require('node-localstorage');
const app = express();
const localStorage = new LocalStorage('./scratch');

app.use(express.json());

app.get('/data', (req, res) => {
  const savedData = localStorage.getItem('my_data') || "No data stored yet!";
  res.json({ success: true, stored_value: savedData });
});

app.post('/data', (req, res) => {
  const { value } = req.body;
  if (!value) return res.status(400).json({ success: false, error: "Missing value" });
  localStorage.setItem('my_data', value);
  res.json({ success: true, message: "Stored successfully!", current_value: value });
});

app.listen(10000, '0.0.0.0', () => {
  console.log('Server is running on port 10000');
});
