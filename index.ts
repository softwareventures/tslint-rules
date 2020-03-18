const jsRules = {
    "align": {
        options: ["parameters", "statements"]
    },
    "arrow-parens": false,
    "arrow-return-shorthand": true,
    "comment-format": {
        options: "check-space"
    },
    "curly": true,
    "encoding": true,
    "eofline": false,
    "function-constructor": true,
    "import-spacing": true,
    "indent": false,
    "max-classes-per-file": false,
    "max-line-length": {
        options: [120]
    },
    "member-access": true,
    "member-ordering": {
        options: {
            order: "statics-first"
        }
    },
    "no-bitwise": false,
    "no-consecutive-blank-lines": {
        options: [2]
    },
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
    "no-trailing-whitespace": true,
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
    "object-literal-key-quotes": {
        options: ["consistent-as-needed"]
    },
    "object-literal-sort-keys": false,
    "one-line": {
        options: [
            "check-catch",
            "check-else",
            "check-finally",
            "check-open-brace",
            "check-whitespace"
        ]
    },
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
    "quotemark": {
        options: ["double", "avoid-escape"]
    },
    "semicolon": {
        options: ["always"]
    },
    "space-before-function-paren": {
        options: {
            anonymous: "never",
            asyncArrow: "always",
            constructor: "never",
            method: "never",
            named: "never"
        }
    },
    "space-within-parens": {
        options: [0]
    },
    "ter-indent": {
        options: [4, {
            CallExpression: {
                arguments: 1
            },
            FunctionDeclaration: {
                body: 1,
                parameters: "first"
            },
            FunctionExpression: {
                body: 1,
                parameters: "first"
            },
            MemberExpression: 1,
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1
        }]
    },
    "ter-no-proto": true,
    "ter-no-script-url": true,
    "ter-no-self-compare": true,
    "ter-no-tabs": true,
    "trailing-comma": {
        options: {
            esSpecCompliant: true,
            multiline: "ignore",
            singleline: "never"
        }
    },
    "unnecessary-bind": true,
    "unnecessary-constructor": true,
    "variable-name": {
        options: ["check-format"]
    },
    "whitespace": {
        options: [
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-rest-spread",
            "check-separator",
            "check-type",
            "check-type-operator",
            "check-preblock"
        ]
    }
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
        options: [
            "call-signature"
        ]
    },
    "typedef-whitespace": {
        options: [
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            },
            {
                "call-signature": "onespace",
                "index-signature": "onespace",
                "parameter": "onespace",
                "property-declaration": "onespace",
                "variable-declaration": "onespace"
            }
        ]
    }
};

export = {
    extends: ["tslint:recommended", "tslint-eslint-rules"],
    jsRules,
    rules
};
