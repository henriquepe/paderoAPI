import mongoose from 'mongoose';

if(process.env.NODE_ENV === "production"){

  mongoose.connect('mongodb+srv://rosa1702:rosa1702@paderodb.m7oe2.mongodb.net/paderoDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('mongo connected');
  });

} else {

  mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('mongo connected');
  });

}

