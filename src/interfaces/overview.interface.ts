import { Document } from "mongoose";

export interface OverviewInterface extends Document {
    readonly _id: string;
    readonly name: string;
    readonly score: number;
    readonly message: string;

}