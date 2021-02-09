import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/padero_db', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected');
});