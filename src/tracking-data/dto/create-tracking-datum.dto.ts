import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTrackingDatumDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    newsletter_id: number;

    @IsString()
    @IsNotEmpty()
    action: string;

    @IsDate()
    @IsNotEmpty()
    activity_date: Date;
}
