import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FindingSchema } from './finding.schema';
import { OverviewSchema } from './overview.schema';
import { CommunityAlertSchema } from './community-alert.schema';
import { AuditStatus } from "../utils/enums";
import { OverviewInterface } from 'src/interfaces/overview.interface';
import { CommunityAlertInterface } from 'src/interfaces/community-alert.interface';
import { FindingInterface } from 'src/interfaces/finding.interface';

export type ReportDocument = Report & Document;

@Schema({versionKey: false})
export class Report {
  @Prop({ required: true, unique: true })
  coinId: number;

  @Prop({ required: true })
  auditor: string;

  @Prop({ required: true, enum: AuditStatus })
  auditStatus: number;

  @Prop({ unique: true})
  coinName: string;

  @Prop()
  score: number;

  @Prop({ unique: true})
  contractAddress: string;

  @Prop()
  contractPlatform: string;

  @Prop()
  auditTime: Date;

  @Prop()
  reportUrl: string;

  @Prop({ type: [FindingSchema], default:[] })
  findings: FindingInterface[];

  @Prop({ type: [OverviewSchema], default: [] })
  overview: OverviewInterface[];

  @Prop({ type: [{ type: CommunityAlertSchema, default: [] }] })
  communityAlerts: CommunityAlertInterface[];
}

export const ReportSchema = SchemaFactory.createForClass(Report);
