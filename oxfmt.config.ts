import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  sortImports: {
    newlinesBetween: false,
    groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
  },
  ignorePatterns: ["dist/**", "node_modules/**", "src/routeTree.gen.ts"],
});
