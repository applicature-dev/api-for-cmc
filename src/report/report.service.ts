import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ReportInterface } from 'src/interfaces/report.interface';
import { CommunityAlert,CommunityAlertDocument } from 'src/schemas/CommunityAlert.schema';
import { Finding, FindingDocument } from 'src/schemas/Finding.schema';
import { Overview ,OverviewDocument } from 'src/schemas/overview.schema';
import { Report, ReportDocument } from 'src/schemas/Report.schema';

@Injectable()
export class ReportService {
    
    constructor(
        @InjectModel(Report.name) private readonly reportModel : Model<ReportDocument>,
        @InjectModel(Overview.name) private readonly overviewModel : Model<OverviewDocument>,
        @InjectModel(Finding.name) private readonly findingModel : Model<FindingDocument>,
        @InjectModel(CommunityAlert.name) private readonly communityAlertModel : Model<CommunityAlertDocument>
    ){}

    async findAll() : Promise<Report[]>{
        return await this.reportModel
            .find()
            .populate('overviews')
            .populate('community_alerts')
            .populate('findings')
            .exec();
    }

    async findByCoinId(coinId : number) : Promise<Report> {
        return await this.reportModel
            .findOne({'coinId': coinId})
            .populate('overviews')
            .populate('community_alerts')
            .populate('findings')
            .exec();
    }

    async create(report: ReportInterface) : Promise<Report> {
            const createdReport = new this.reportModel(report);
            return createdReport.save();

        // const { report, overview, finding, community_alerts  } = input;
        // report._id = new Types.ObjectId();
        // const reportToSave = new this.reportModel(report);
        // await reportToSave.save();

        // overview.report = reportToSave._id;
        // overview._id = new Types.ObjectId();
        // const overviewToSave = new this.overviewModel(overview);
        // overviewToSave.save();

        // finding.report = reportToSave._id;
        // finding._id = new Types.ObjectId();
        // const findingToSave = new this.findingModel(finding);
        // findingToSave.save();

        // community_alerts.report = reportToSave._id;
        // community_alerts._id = new Types.ObjectId();
        // const community_alertsToSave = new this.communityAlertModel(community_alerts);
        // community_alertsToSave.save();

        // return { success : true };
    }
}
