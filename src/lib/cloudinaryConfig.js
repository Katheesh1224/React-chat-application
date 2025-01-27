const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dy2u9tx8m", 
    api_key: process.env.CLOUDINARY_API_KEY,      
    api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "chat_images", 
        });
        return result.secure_url; 
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        throw error;
    }
};

module.exports = { uploadImage };
