import AdminBro from "admin-bro";
import Express from "express";

declare module "admin-bro-expressjs" {
  export const buildRouter: (admin: MamadAdmin) => Express.Router;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type MamadAdmin = AdminBro & {};
