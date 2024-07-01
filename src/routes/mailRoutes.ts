import express from "express";
import * as sendmailController from "../controller/sendmailController";

class UserRoutes {
  public router: any;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  protected registerRoutes(): void {
    this.router
      .get("/", (req: express.Request, res: express.Response) => {
        res.json({ data: "welcome !" });
      })
      .post("/mails",sendmailController.mailData);
  }
}
export default new UserRoutes();
