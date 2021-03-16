const mongoose = require = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            required: "Please enter the type of exercise you are doing"
        },
        name: {
            type: String,
            required: "Please enter the name of the exercise"
        },
        weight: {
            type: Number,
            required: "Enter the weight lifted"
        },
        reps: {
            type: Number,
            required: "Enter the number of reps"
        },
        sets: {
            type: Number,
            required: "Enter the number of sets"
        },
        duration: {
            type: Number,
            required: "Duration of workout"
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;