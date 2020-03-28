const app = require('./server');
const port = process.env.PORT || 8000;

// local hosting of Lambda Service on local AWS Envi
// start listening
app.listen(port, () => {
    console.log(`Listening on : http://localhost:${port}`);
});