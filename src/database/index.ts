import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://rosa1702:rosa1702@paderodb.m7oe2.mongodb.net/paderoDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected');
});