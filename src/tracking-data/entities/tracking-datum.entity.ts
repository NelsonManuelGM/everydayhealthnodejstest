import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class TrackingDatum extends Document {
    @Prop({ required: true, index: true })
    user_id: number;

    @Prop({ required: true, index: true })
    newsletter_id: number;

    @Prop({ required: true })
    action: string;

    @Prop({ required: true })
    activity_date: Date;
}

export const TrackingDatumSchema = SchemaFactory.createForClass(TrackingDatum);