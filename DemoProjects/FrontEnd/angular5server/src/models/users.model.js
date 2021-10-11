import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, unique: true, require: true},
  password: {type: String, require: true},
  providers: [{
    name: String,
    id: String
  }]
}, {collection: 'users'});

export default mongoose.model('User', UserSchema);