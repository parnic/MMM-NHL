import eslintPluginJs from "@eslint/js";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import globals from "globals";

const config = [
    eslintPluginJs.configs.all,
    {
        "ignores": ["docs/*"]
    },
    {
        "files": ["**/*.js"],
        "languageOptions": {
            "ecmaVersion": "latest",
            "globals": {
                ...globals.browser,
                ...globals.node
            },
            "sourceType": "commonjs"
        },
        "plugins": {
            ...eslintPluginStylistic.configs["recommended-flat"].plugins
        },
        "rules": {
            ...eslintPluginStylistic.configs["recommended-flat"].rules,
            "@stylistic/array-element-newline": ["error", "consistent"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/quote-props": "off",
            "@stylistic/semi": ["error", "always"],
            "camelcase": "off",
            "consistent-return": "off",
            "id-length": "off",
            "max-lines": ["warn", 600],
            "max-statements": ["error", 25],
            "no-magic-numbers": "off",
            "no-shadow": "warn",
            "no-ternary": "off",
            "no-warning-comments": "warn",
            "one-var": "off",
            "sort-keys": "off",
            "strict": "off"
        }
    },
    {
        "files": ["**/*.mjs"],
        "languageOptions": {
            "ecmaVersion": "latest",
            "globals": {
                ...globals.node
            },
            "sourceType": "module"
        },
        "plugins": {
            ...eslintPluginStylistic.configs["all-flat"].plugins
        },
        "rules": {
            ...eslintPluginStylistic.configs["all-flat"].rules,
            "@stylistic/array-element-newline": ["error", "consistent"],
            "no-magic-numbers": "off"
        }
    }
];

export default config;
