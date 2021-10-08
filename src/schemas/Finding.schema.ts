import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Report } from "./Report.schema";
import { Severity } from "../utils/enums";

export type FindingDocument = Finding & Document;

@Schema()
export class Finding {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: number;

  @Prop({ required: true })
  severity: Severity;

  @Prop({ required: true })
  resolved: boolean;

  @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Report' })
  report: Report;
}

export const FindingSchema = SchemaFactory.createForClass(Finding);

// export const FindingSchema = new mongoose.Schema({
//   _id : mongoose.Schema.Types.ObjectId,
//   title : String,
//   type : String,
//   severity : String,
//   created_at : Date,
//   resolved: Boolean,
//   report: { type : mongoose.Schema.Types.ObjectId, ref: 'Report' },
// });

// export const Finding = mongoose.model('Finding', FindingSchema);