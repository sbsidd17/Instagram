import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"],
        minLenght : [5, "Name should be greater than 5 charachers"],
        maxLenght : [50, "Name should be less than 50 charachers"],
        trim : true,
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        maxLenght : [50, "Name should be less than 50 charachers"],
        trim : true,
        lovercase : true,
        unique : true,
    },
    password : {
        type : String,
        required : [true, "password is required"],
        trim : true,
        select : false,
    },

    confirm_password : {
        type : String,
        required : [true, "confirm password is required"],
        trim : true,
        select : false,
    },
})

const userModal = mongoose.model("users", userSchema);

export {
    userModal,
}