export enum AuditStatus {
    Not_AUDITED = 0,
    AUDITING = 1,
    AUDITED = 2,
}

export enum AlertStatus {
    CONFIRMED = "CONFIRMED",
    UNCONFIRMED = "UNCONFIRMED",
}

export enum Severity {
    INFORMATIONAL,
    HIGH,
    LOW,
    MEDIUM,
    CRITICAL
}

export enum Role {
    ADMIN = 'Admin',
    USER = 'User'
}