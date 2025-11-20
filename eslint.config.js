import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  js.configs.recommended,
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ),
  prettierConfig,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Override for Node.js config files (vite.config.js, etc.)
  {
    files: ["vite.config.js", "*.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
