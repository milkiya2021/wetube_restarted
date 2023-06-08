import express from "express";
import { watchVideo, editVideo} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watchVideo);
videoRouter.get("/edit", editVideo);

export default videoRouter;
