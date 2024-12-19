import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Admin:ftwZFNWRXZ1fSUEk@cluster0.u3njo.mongodb.net/');
    console.log("DB Connected")
}