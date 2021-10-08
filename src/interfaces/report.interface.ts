import { Document } from "mongoose";
import { CommunityAlertInterface } from "./community-alert.interface";
import { FindingInterface } from "./finding.interface";
import { OverviewInterface } from "./overview.interface";
import { AuditStatus } from "../utils/enums";

export interface ReportInterface extends Document {
    readonly _id: string;
    readonly coinId: number;
    readonly auditor: string;
    readonly symbol: string;
    readonly coinName: string,
    readonly auditStatus: AuditStatus;
    readonly score: number;
    readonly auditTime: Date;
    readonly contractAddress: string;
    readonly contractPlatform: string;
    readonly reportUrl: string;
    readonly alerts: CommunityAlertInterface[];
    readonly findings: FindingInterface[];
    readonly overviews: OverviewInterface[]
    //comments: [{ type : Schema.Types.ObjectId, ref: 'Comment' }],
}