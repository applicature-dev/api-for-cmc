import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AlertStatus } from "../utils/enums";

export type CommunityAlertDocument = CommunityAlert & Document;

@Schema({_id: false, versionKey: false})
export class CommunityAlert {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  details: string;

  @Prop({ required: true, enum: AlertStatus })
  status: string;
}

export const CommunityAlertSchema = SchemaFactory.createForClass(CommunityAlert);