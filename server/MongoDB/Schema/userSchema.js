import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    ipAddress: Array,
    passcode: String,
});

const user = mongoose.model('user', userSchema);

export default user;

