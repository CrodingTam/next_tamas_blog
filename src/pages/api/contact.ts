import { ObjectId } from "bson";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const {email, name, message} = req.body;

        if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
            res.status(422).json({message: "Invalid input"})
            return;
        }

        //Store it in a database
        const newMessage = {
            email: email,
            name: name,
            message: message,
            id: {}
        }

        let client;
        let db;
        let result;
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.q16xuq8.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
        try {
            client = await MongoClient.connect(connectionString);
            db = client.db();
        } catch (error) {
            console.error(error);
            res.status(404).json({message: "Failed to connect to the database"});
        }
        
        try {
            if (db) {
                result = await db.collection("message").insertOne(newMessage);
            }
            
        } catch (error) {

        }
        
        
        result && (newMessage.id = result.insertedId);
        

        res.status(201).json({message: "Succesfully stored message", addedMessage: newMessage});
        client && client.close();
    }

}

export default handler;