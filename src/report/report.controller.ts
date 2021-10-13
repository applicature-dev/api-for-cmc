import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReportInterface } from 'src/interfaces/report.interface';
import { ReportService } from './report.service';
import { ReportDTO } from "../dto/report.dto";
import { Report } from 'src/schemas/report.schema';
// import { Role } from '../roles/role.guard';
// import { Role } from 'src/utils/enums';

@Controller('api/report')
export class ReportController {

    constructor(
        private readonly reportService: ReportService
    ) {}

    @Get()
    async findAll() : Promise<Report[]> {
        return await this.reportService.findAll();
    }

    @Get(":coinId")
    async findByCoinId(@Param('coinId') coinId: number) : Promise<Report> {
        return await this.reportService.findByCoinId(coinId);
    }

    // @Get(":coinName")
    // async findByCoinName(@Param('coinName') coinName: string) : Promise<Report> {
    //     return await this.reportService.findByCoinName(coinName);
    // }

    @Post()
    // @Roles(Role.ADMIN)
    async create(@Body() reportDTO: ReportDTO) {
        await this.reportService.create(reportDTO);
    }
    

    // @Put()
    // async create(@Body() reportDTO: ReportDTO) {
    //     await this.reportService.create(reportDTO);
    // }
}
