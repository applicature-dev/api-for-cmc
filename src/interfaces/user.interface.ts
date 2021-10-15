import { Document } from "mongoose";

export interface UserInterface extends Document{
        firstName?: string;
        lastName?: string;
        email: string;
        password: string;
        role?: string;
}