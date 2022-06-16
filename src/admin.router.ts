import AdminBro from "admin-bro";
import { buildRouter } from "admin-bro-expressjs";

const buildAdminRouter = (admin: AdminBro) => {
  const router = buildRouter(admin);
  return router;
};

export default buildAdminRouter;
