import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReportInterface } from 'src/interfaces/report.interface';
import { Report } from 'src/schemas/Report.schema';
import { ReportService } from './report.service';

@Controller('api/report')
export class ReportController {

    constructor(
        private reportService: ReportService
    ) {}

    @Post()
    create(@Body() report: ReportInterface) {
        this.reportService.create(report);
    }

    @Get()
    async findAll() : Promise<Report[]> {
        return await this.reportService.findAll();
    }

    @Get(":coinId")
    async findByCoinId(@Param() param) : Promise<Report> {
        return await this.reportService.findByCoinId(param.coinId);
    }
}
