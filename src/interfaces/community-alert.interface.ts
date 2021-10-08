import { Document } from "mongoose";
import { AlertStatus } from "../utils/enums";

export interface CommunityAlertInterface extends Document {
    readonly _id: string;
    readonly description: string;
    readonly details: string;
    readonly status: AlertStatus;
}