import { ApiProperty } from "@nestjs/swagger";

class SummaryMetadata {
    @ApiProperty()
    _id: Date;

    @ApiProperty()
    count: number;
}


export class NLSummarySchema {
    @ApiProperty()
    newsletter_id: number;

    @ApiProperty({isArray:true, type: SummaryMetadata })
    summary: SummaryMetadata[];
}

export class UserSummarySchema {
    @ApiProperty()
    user_id: number;

    @ApiProperty({isArray:true, type: SummaryMetadata })
    summary: SummaryMetadata[];
}

export class NewLetterActionSummarySchema {
    @ApiProperty()
    newsletter_id: number;

    @ApiProperty()
    action: string;

    @ApiProperty({isArray:true, type: SummaryMetadata })
    summary: SummaryMetadata[];
}