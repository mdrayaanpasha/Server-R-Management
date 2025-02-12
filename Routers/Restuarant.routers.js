import express from "express";
import { RestuarntRegistration, Uploader } from "../Controllers/Restuarant.controlllers.js";
import multer from "multer";
import fs from "fs";
import path from "path"; // ✅ Import path to handle file extensions

const Router = express.Router();

// 🔹 Create upload folder if it doesn't exist
const uploadFolder = `uploads/restaurants`;
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, { recursive: true });
}

// 🔹 Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
        const RestId = req.params.restId;
        if (!RestId) {
            return cb(new Error("Restaurant ID is missing"), null);
        }

        // 🔹 Get file extension
        const ext = path.extname(file.originalname);

        // 🔹 Maintain count of uploaded files
        const fileIndex = req.fileIndex || 1; // Default to 1
        req.fileIndex = fileIndex + 1; // Increment for next file

        // 🔹 Generate filename format: restId-1.ext, restId-2.ext, restId-3.ext
        cb(null, `${RestId}-${fileIndex}${ext}`);
    }
});

const upload = multer({ storage });

// 🔹 Apply multer middleware correctly
Router.post("/register", RestuarntRegistration);
Router.post("/upload/:restId", (req, res, next) => {
    req.fileIndex = 1; // Reset file count for each request
    next();
}, upload.array("images", 3), Uploader);

export default Router;
