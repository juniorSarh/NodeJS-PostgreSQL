export type applicationStatus = 'applied'|'pending' | 'offer' | 'rejected';

export interface Application {
    id: number;
    //userId: number;
    company_name: string;
    job_title: string;
    status: applicationStatus;
    applied_at: Date;
    //notes?: string;
}

export type NewApplication = Omit<Application, 'id'|'applied_at'>

export type UpdateApplication = Pick<Application,'status'>

