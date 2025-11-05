import { query } from "../config/database";
import { Application, NewApplication } from "../types/application.type";


//create new application
export const createapplication = async (appdata: NewApplication): Promise<Application> => { 
    const { company_name, job_title, status } = appdata;
    const { rows } = await query(
        'INSERT INTO applications (company_name, job_title, status) VALUES ($1, $2, $3) RETURNING *',
        [company_name, job_title, status]
    );
    return rows[0];
}

//get all applications
export const findAllapplications = async (): Promise<Application[]> => {
    const { rows } = await query('SELECT * FROM applications ORDER BY applied_at DESC');
    return rows;
}

//get application by id
export const findapplicationById = async (id: number): Promise<Application | null> => {
    const { rows } = await query('SELECT * FROM applications WHERE id = $1', [id]);
    return rows[0] || null;
}