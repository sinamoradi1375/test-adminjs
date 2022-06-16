import express, { Application, Request, Response } from "express";
import AdminBro from "admin-bro";
import options from "./admin.options";
import buildAdminRouter from "./admin.router";

const app: Application = express();
const port = 3001;

const run = async () => {
  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);

  app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
  });
};

app.get("/toto", (req: Request, res: Response) => {
  res.send("Hello toto");
});

export default run;
