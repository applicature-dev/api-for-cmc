import { Document } from "mongoose";
import { Severity } from "../utils/enums";

export interface FindingInterface extends Document {
    readonly _id: string;
    readonly title: number;
    readonly type: string;
    readonly severity: Severity;
    readonly resolved: boolean
}