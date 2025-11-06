import { Router } from "express";
import {
  addapplication,
  getallapplications,
  getapplicationById,
  deleteapplicationById,
  updateapplication,
} from "../controllers/applicationcontrollers";
                                                                
import { get } from "http";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.use(protect);

router.post('/applications', addapplication);
router.get('/applications', getallapplications);
router.get('/applications/:id', getapplicationById);
router.put('/applications/:id', updateapplication);
router.delete('/applications/:id', deleteapplicationById);


export default router;