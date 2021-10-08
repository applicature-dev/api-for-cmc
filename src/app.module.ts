import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ReportModule } from './report/report.module';
import { OverviewModule } from './overview/overview.module';
import { FindingModule } from './finding/finding.module';
import { CommunityAlertModule } from './community-alert/community-alert.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/cmc-audit-report',
      {useNewUrlParser: true},
    ),
    ReportModule,
    OverviewModule,
    FindingModule,
    CommunityAlertModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
