import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { FindingSchema } from 'src/schemas/Finding.schema';
import { FindingService } from './finding.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Finding', schema : FindingSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: 'Finding', schema : FindingSchema }]),
  ],
  providers: [FindingService]
})
export class FindingModule {}
