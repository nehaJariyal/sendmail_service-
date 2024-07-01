import express from "express";
import bodyParser from "body-parser";
import UserRoutes from "./routes/mailRoutes";

const app: any = express();
const port: number = 5000;

app.use(bodyParser.json());
app.use("/", UserRoutes.router);

app.listen(port, () => {
  console.log(` The server running on port: ${port}`);
});
