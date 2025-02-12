
import dotenv from 'dotenv';
import crypto from 'crypto';
import jwt from "jsonwebtoken"

dotenv.config(); 

import Core_Shard_0_0 from '../DB/Restuarants_Shard_0/Core_Shards/Core_Shard_0_0.js';
import Core_Shard_1_0 from '../DB/Restuarants_Shard_1/Core_Shards/Core_Shard_1_0.js';
import Core_Shard_2_0 from '../DB/Restuarants_Shard_2/Core_Shards/Core_Shard_2_0.js';


async function hashStringWithin3(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data); // SHA-256 hash
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert to byte array
    const hashInt = hashArray.reduce((acc, byte) => (acc << 8) + byte, 0); // Convert to integer
    return hashInt % 3; 
}


export async function RestuarntRegistration(req, res) {
    try {
        const { Name, Location, MapLink, Type, Seating_Capacity, Operation_Hours, Phone_no, Password, secret } = req.body;

        const SECRET = process.env.SECRET_KEY
        if (!secret || secret !== SECRET) {
            return res.status(401).json({ error: "not authorized" });
        }

        delete req.body.secret;

        const shard = await hashStringWithin3(Name);

        const shard_Map = {
            0: Core_Shard_0_0,
            1: Core_Shard_1_0,
            2: Core_Shard_2_0
        };

        // try {
        //     const Checkout = await shard_Map[shard].find({ Phone_no: Phone_no });
        //     if (Checkout.length !== 0) {
        //         return res.status(402).json({ message: "user already exists!" });
        //     }
        // } catch (error) {
        //     return res.status(500).json({
        //         error: error,
        //         message: "internal server error",
        //         hint: "error in restaurant controllers, in registration page, in checkout."
        //     });
        // }

        try {
            const Saved = new shard_Map[shard](req.body);
            await Saved.save();

            const token = jwt.sign({ id: Saved._id, name: Saved.Name, shard }, SECRET);

            return res.status(200).json({ message: "success", token: token, restaurant_id: Saved._id });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error: error,
                message: "internal server error",
                hint: "error in saving data in restaurant controller in registration endpoint."
            });
        }

    } catch (error) {
        console.error("Error in Restaurant Registration:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
export async function Uploader(req, res) {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "No files uploaded" });
        }
        res.status(200).json({ message: "Files uploaded successfully", files: req.files });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}