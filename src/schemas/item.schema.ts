import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema({
  timestamps: true,
})
export class Item {
  @Prop()
  json: string;

  @Prop()
  expirateAt: Date;

  @Prop()
  ip: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
