import { CommunityAlertDTO } from "./community-alert.dto";
import { FindingDTO } from "./finding.dto";
import { OverviewDTO } from "./overview.dto";

export class ReportDTO {
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
    communityAlerts: CommunityAlertDTO[];
    findings: FindingDTO[];
    overviews: OverviewDTO[]
}