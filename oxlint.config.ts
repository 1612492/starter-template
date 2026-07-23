import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "react"],
  categories: {
    correctness: "error",
    suspicious: "error",
    pedantic: "off",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
  ignorePatterns: ["dist/**", "node_modules/**", "src/routeTree.gen.ts"],
});
