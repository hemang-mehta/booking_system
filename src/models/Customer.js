import mongoose from 'mongoose';

const customerschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    emailid: {
        type: emailid,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    password: {
        type: password,
        required: true,
    },
})

export default mongoose.models.User || mongoose.model('User', UserSchema);