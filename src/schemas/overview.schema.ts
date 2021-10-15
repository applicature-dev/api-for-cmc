import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OverviewDocument = Overview & Document;

@Schema({_id: false})
export class Overview {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  msg: string;
}

export const OverviewSchema = SchemaFactory.createForClass(Overview);