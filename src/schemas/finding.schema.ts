import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Severity } from "../utils/enums";

export type FindingDocument = Finding & Document;

@Schema({_id: false, versionKey: false})
export class Finding {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true, enum: Severity })
  severity: string;

  @Prop({ required: true })
  resolved: boolean;
}

export const FindingSchema = SchemaFactory.createForClass(Finding);