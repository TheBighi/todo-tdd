const express = require('express');
const todoRoutes = require('./routes/todo.routes');
const app = express();
const mongodd = require('./mongodb/mongodb.connect')

const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));

mongodd.connect();

app.use((req, res, next) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => {
        if (data) console.log('RAW BODY:', data);
    });
    next();
});

app.use(express.json());

app.use('/todos', todoRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({"status": "ok"});
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;