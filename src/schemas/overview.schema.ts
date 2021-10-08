import * as mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Report } from './Report.schema';

export type OverviewDocument = Overview & Document;

@Schema()
export class Overview {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  message: string;

  @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Report' })
  report: Report;
}

export const OverviewSchema = SchemaFactory.createForClass(Overview);