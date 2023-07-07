import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_USERPASSWORD;
export const Connection = () => {
    const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-ujoa2vq-shard-00-00.ogjme8l.mongodb.net:27017,ac-ujoa2vq-shard-00-01.ogjme8l.mongodb.net:27017,ac-ujoa2vq-shard-00-02.ogjme8l.mongodb.net:27017/?ssl=true&replicaSet=atlas-106s13-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    mongoose.connection.on('connected', () => {
        console.log("Database connected Sucessfully");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("database disconnected");

    })

    mongoose.connection.on('error', () => {
        console.log("error while connecting with the database", error.message);
    })

};

export default Connection;