import mongoose from 'mongoose';
const {Schema, model} = mongoose

const todoSchema = Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    deadline:{
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        required: true,
        default: false
    }
})

const todoModel = model('todo', todoSchema);
export default todoModel; 