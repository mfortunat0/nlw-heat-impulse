import { Router } from "express";
import { AuthenticateUserController } from "./controllers/authenticateUserController";
import { CreateMessageController } from "./controllers/createMessageController";
import { GetLast3MessagesController } from "./controllers/getLast3MessagesController";
import { ProfileUserController } from "./controllers/profileUserController";
import { ensureAuthentication } from "./middleware/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post(
  "/messages",
  ensureAuthentication,
  new CreateMessageController().handle
);
router.get("/messages/last3", new GetLast3MessagesController().handle);
router.get(
  "/profile",
  ensureAuthentication,
  new ProfileUserController().handle
);

export { router };
