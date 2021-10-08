import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Finding } from './Finding.schema';
import { Overview } from './overview.schema';
import { CommunityAlert } from './CommunityAlert.schema';
import { AuditStatus } from "../utils/enums";

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ required: true })
  coinId: number;

  @Prop({ required: true })
  auditor: string;

  @Prop({ required: true })
  auditStatus: AuditStatus; // enum

  @Prop()
  coinName: string;

  @Prop()
  score: number;

  @Prop()
  contractAddress: string;

  @Prop()
  contractPlatform: string;

  @Prop()
  auditTime: Date;

  @Prop()
  reportUrl: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Finding' }] })
  findings: Finding[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Overview' }] })
  overview: Overview[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CommunityAlert' }] })
  communityAlerts: CommunityAlert[];
}

export const ReportSchema = SchemaFactory.createForClass(Report);

// export const ReportSchema = new mongoose.Schema({
//   _id : mongoose.Schema.Types.ObjectId,
//   coinId: Number,
//   symbol : String,
//   auditor : String,
//   auditStatus : Number,
//   created_at : Date,
//   coinName: String,
//   score: Number,
//   contractAddress: String,
//   auditTime: Date,
//   contractPlatform: String,
//   reportUrl: String,
//   findings: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Finding' }],
//   Reports: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Report' }],
//   communityAlerts: [{ type : mongoose.Schema.Types.ObjectId, ref: 'CommunityAlert' }]
// });

// export const Report = mongoose.model('Report', ReportSchema);