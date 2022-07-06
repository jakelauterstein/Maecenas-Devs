const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/maecenasdb', {});

module.exports = mongoose.connection;