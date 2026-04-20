const express = require('express');
const todoRoutes = require('./routes/todo.routes');
const app = express();
const mongodd = require('./mongodb/mongodb.connect')

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

app.get('/', (req, res) => {
  res.send('exoress test');
});

//app.listen(3000, () => {
//  console.log('Server is running on port 3000');
//});

module.exports = app;