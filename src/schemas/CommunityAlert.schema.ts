import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Report } from './Report.schema';
import { AlertStatus } from "../utils/enums";

export type CommunityAlertDocument = CommunityAlert & Document;

@Schema()
export class CommunityAlert {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  status: AlertStatus;

  @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Report' })
  report: Report;
}

export const CommunityAlertSchema = SchemaFactory.createForClass(CommunityAlert);
// export const CommunityAlertSchema = new mongoose.Schema({
//   _id : mongoose.Schema.Types.ObjectId,
//   description : String,
//   details : String,
//   status : String,
//   created_at : Date,
//   report: { type : mongoose.Schema.Types.ObjectId, ref: 'Report' },
// });

// export const CommunityAlert = mongoose.model('CommunityAlert', CommunityAlertSchema);