import { Request, Response } from "express";
import * as ApplicationService from "../service/applicationservice";

export const addapplication = async (req: Request, res: Response)=> {
    try {
        const newapplication = await ApplicationService.createapplication(req.body);
        res.status(201).json(newapplication);  
    }catch (error) {
        res.status(500).json({ message: 'error in creating application', error });
    }}


    export const getallapplications = async (req: Request, res: Response) => {
        try {
            const applications = await ApplicationService.findAllapplications();        
            res.status(200).json(applications);
        }
        catch (error) {
            res.status(500).json({ message: 'could not fetch all applications', error });
        }
    };

    export const getapplicationById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const application = await ApplicationService.findapplicationById(id);
            if (application) {
                res.status(200).json(application);
            } else {
                res.status(404).json({ message: 'application not found' });
            }   
        } catch (error) {
            res.status(500).json({ message: 'could not fetch application by id', error });
        }
    };
