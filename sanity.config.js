import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/index";
import { dashboardTool } from "@sanity/dashboard";
import { config } from "lib/sanity.api";

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "Next13Sanity3Test",

  ...config,

  plugins: [deskTool(), visionTool(), dashboardTool()],

  schema: {
    types: schemaTypes
  }
});
