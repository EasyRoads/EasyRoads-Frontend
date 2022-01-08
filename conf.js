// require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();

module.exports = {
    env: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    },
};