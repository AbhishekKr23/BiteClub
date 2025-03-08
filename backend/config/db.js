import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhi:abhi@cluster0.ghc2m.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}