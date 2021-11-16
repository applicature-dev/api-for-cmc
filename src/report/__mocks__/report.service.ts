import { reportStub } from "../test/stubs/report.stubs";

export const ReportService = jest.fn().mockResolvedValue({
    findByCoinId: jest.fn().mockResolvedValue(reportStub()),
    findAll: jest.fn().mockResolvedValue([reportStub()]),
    create: jest.fn().mockResolvedValue(reportStub())
})