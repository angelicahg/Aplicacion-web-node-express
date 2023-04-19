const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/save', (req, res) => {
  const data = req.body;
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).send('Error al guardar la información');
    } else {
      res.send('Información guardada correctamente');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto \${PORT}`);
});
