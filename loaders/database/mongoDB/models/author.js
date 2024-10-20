import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    birthDate: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

export const Author = mongoose.model('Author', authorSchema);