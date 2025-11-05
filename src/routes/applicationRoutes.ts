import { Router } from "express";
import { addapplication,getallapplications,getapplicationById } from "../controllers/applicationcontrollers";
                                                                
import { get } from "http";

const router = Router();

router.post('/applications', addapplication);
router.get('/applications', getallapplications);
router.get('/applications/:id', getapplicationById);


export default router;