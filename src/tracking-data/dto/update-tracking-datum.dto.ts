import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackingDatumDto } from './create-tracking-datum.dto';

export class UpdateTrackingDatumDto extends PartialType(CreateTrackingDatumDto) {}
