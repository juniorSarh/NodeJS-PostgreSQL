import { Router } from "express";
import {
  addapplication,
  getallapplications,
  getapplicationById,
  deleteapplicationById,
  updateapplication,
} from "../controllers/applicationcontrollers";
                                                                
import { get } from "http";

const router = Router();

router.post('/applications', addapplication);
router.get('/applications', getallapplications);
router.get('/applications/:id', getapplicationById);
router.put('/applications/:id', updateapplication);
router.delete('/applications/:id', deleteapplicationById);


export default router;