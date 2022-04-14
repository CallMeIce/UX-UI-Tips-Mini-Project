const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
const diagnosticRouter = require('./diagnostics')
// X TODO: import your diagnostics route

const app = express();


//*localhost:3001/api
app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
app.use('/diagnostics', diagnosticRouter)
// X TODO: Initialize diagnostics route

module.exports = app;
