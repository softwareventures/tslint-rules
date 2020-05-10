const jsRules = {
    "align": false,
    "arrow-parens": false,
    "arrow-return-shorthand": true,
    "comment-format": false,
    "curly": true,
    "encoding": false,
    "eofline": false,
    "function-constructor": true,
    "import-spacing": false,
    "indent": false,
    "jsdoc-format": false,
    "linebreak-style": false,
    "max-classes-per-file": false,
    "max-line-length": false,
    "member-access": true,
    "member-ordering": {
        options: {
            order: "statics-first"
        }
    },
    "newline-before-return": false,
    "new-parens": false,
    "no-bitwise": false,
    "no-consecutive-blank-lines": false,
    "no-console": false,
    "no-duplicate-imports": true,
    "no-duplicate-switch-case": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-empty-character-class": true,
    "no-for-in-array": true,
    "no-implicit-dependencies": [true, ["ava"]],
    "no-invalid-regexp": true,
    "no-irregular-whitespace": true,
    "no-multi-spaces": true,
    "no-return-await": true,
    "no-shadowed-variable": false,
    "no-switch-case-fall-through": true,
    "no-this-assignment": true,
    "no-trailing-whitespace": false,
    "no-unbound-method": {
        options: ["ignore-static"]
    },
    "no-unexpected-multiline": true,
    "no-unnecessary-callback-wrapper": true,
    "no-unnecessary-class": {
        options: ["allow-constructor-only"]
    },
    "no-unsafe-finally": true,
    "no-var-keyword": true,
    "no-void-expression": {
        options: ["ignore-arrow-function-shorthand"]
    },
    "number-literal-format": false,
    "object-literal-key-quotes": false,
    "object-literal-sort-keys": false,
    "one-line": false,
    "ordered-imports": {
        options: {
            "import-sources-order": "case-insensitive",
            "module-source-path": "full",
            "named-imports-order": "case-insensitive"
        }
    },
    "prefer-function-over-method": {
        options: ["allow-public", "allow-protected"]
    },
    "prefer-for-of": false,
    "prefer-object-spread": true,
    "prefer-while": true,
    "promise-function-async": true,
    "quotemark": false,
    "semicolon": false,
    "space-before-function-paren": false,
    "space-within-parens": false,
    "ter-no-proto": true,
    "ter-no-script-url": true,
    "ter-no-self-compare": true,
    "trailing-comma": false,
    "unnecessary-bind": true,
    "unnecessary-constructor": true,
    "variable-name": {
        options: ["check-format"]
    },
    "whitespace": false
};

const rules = {
    ...jsRules,
    "array-type": {
        options: ["array-simple"]
    },
    "await-promise": true,
    "interface-name": false,
    "interface-over-type-literal": false,
    "no-boolean-literal-compare": true,
    "no-floating-promises": true,
    "no-inferred-empty-object-type": true,
    "no-mergeable-namespace": true,
    "no-redundant-jsdoc": true,
    "no-unnecessary-type-assertion": true,
    "typedef": {
        options: ["call-signature"]
    },
    "typedef-whitespace": false
};

export = {
    extends: ["tslint:recommended", "tslint-eslint-rules"],
    jsRules,
    rules
};
