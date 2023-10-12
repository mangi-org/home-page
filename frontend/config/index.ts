// @ts-ignore
import dotenv from 'dotenv';

dotenv.config();

const DOCKER = process.env.NEXT_PUBLIC_DOCKER === "1";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000/";

export {
    DOCKER,
    API_KEY,
    BACKEND_URL
}