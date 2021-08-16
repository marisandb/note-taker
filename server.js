const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use((req,res,next)=>{
    console.log(req.url, res.statusCode)
    next()
})


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
