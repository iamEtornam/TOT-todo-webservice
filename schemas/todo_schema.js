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
    date_time:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true,
        default: false
    }
})

const todoModel = model('todo', todoSchema);
export default todoModel; 