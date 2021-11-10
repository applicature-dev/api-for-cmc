import { Report } from "src/schemas/report.schema";

export const reportStub = () : Report => {
    return {
        coinId: 1,
        auditor: "Zokyo",
        auditStatus: 1,
        contractAddress:"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", 
        auditTime: new Date(),
        score: 98,
        symbol: "CKE",
        coinName: "CAKE",
        reportUrl: "xxxxx", 
        contractPlatform:"BSC",
        communityAlerts: [
            {
                description: "A bad error",
                status: "CONFIRMED",
                details: "simple details"
            },
            {
                description: "A bad error 2",
                status: "CONFIRMED",
                details: "simple details 2"
            }
        ],
        overview: [
            {
            name: "good protocol",
            score: 100,
            msg: "all correct"
          },
          {
            name: "good protocol 2",
            score: 90,
            msg: "all correct 2"
        }],
        findings: [
            {
                title: "MCF-1",
                type: "coding style",
                severity: "INFORMATIONAL",
                resolved: true
            }
        ]
    }
    
}