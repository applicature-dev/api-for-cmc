import { IsNotEmpty, IsOptional } from "class-validator";
import { CommunityAlertDTO } from "./community-alert.dto";
import { FindingDTO } from "./finding.dto";
import { OverviewDTO } from "./overview.dto";

export class UpdateReportDTO {
    @IsOptional()
    coinId: number;

    @IsOptional()
    auditor: string;

    @IsOptional()
    symbol: string;

    @IsOptional()
    coinName: string;

    @IsOptional()
    auditStatus: number;

    @IsOptional()
    score: number;

    @IsOptional()
    auditTime: Date;

    @IsOptional()
    contractAddress: string;

    @IsOptional()
    contractPlatform: string;

    @IsOptional()
    reportUrl: string;

    @IsOptional()
    communityAlerts: CommunityAlertDTO[];

    @IsOptional()
    findings: FindingDTO[];

    @IsOptional()
    overviews: OverviewDTO[]
}