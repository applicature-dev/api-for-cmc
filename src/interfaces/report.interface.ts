import { CommunityAlertInterface } from "./community-alert.interface";
import { FindingInterface } from "./finding.interface";
import { OverviewInterface } from "./overview.interface";

export interface ReportInterface {
    coinId: number;
    auditor: string;
    symbol: string;
    coinName: string;
    auditStatus: number;
    score: number;
    auditTime: Date;
    contractAddress: string;
    contractPlatform: string;
    reportUrl: string;
    communityAlerts?: CommunityAlertInterface[];
    findings?: FindingInterface[];
    overviews?: OverviewInterface[]
}