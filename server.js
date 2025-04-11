const express = require('express');
const path = require('path');

const app = express();
const distPath = path.join(__dirname, 'dist/my-blog/browser');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(process.env.PORT || 8080);
