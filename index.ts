const jsRules = {
    "comment-format": {
        options: "check-space"
    },
    "encoding": true,
    "eofline": false,
    "indent": false,
    "no-bitwise": false,
    "no-consecutive-blank-lines": {
        options: [2]
    },
    "no-console": false,
    "no-duplicate-switch-case": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-empty-character-class": true,
    "no-implicit-dependencies": true,
    "no-invalid-regexp": true,
    "no-irregular-whitespace": true,
    "no-multi-spaces": true,
    "no-shadowed-variable": false,
    "no-switch-case-fall-through": true,
    "no-unexpected-multiline": true,
    "no-unnecessary-callback-wrapper": true,
    "no-unsafe-finally": true,
    "no-unused-variable": true,
    "object-literal-key-quotes": {
        options: ["consistent-as-needed"]
    },
    "object-literal-sort-keys": {
        options: ["match-declaration-order"]
    },
    "prefer-function-over-method": {
        options: ["allow-public", "allow-protected"]
    },
    "prefer-while": true,
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
    "variable-name": {
        options: ["check-format"]
    },
    "whitespace": {
        options: [
            "check-branch",
            "check-decl",
            "check-operator",
            "check-rest-spread",
            "check-separator",
            "check-type",
            "check-type-operator"
        ]
    }
};


const rules = {
    ...jsRules,
    "arrow-parens": false,
    "await-promise": true,
    "interface-name": false,
    "interface-over-type-literal": false,
    "max-classes-per-file": false,
    "no-boolean-literal-compare": true,
    "no-duplicate-imports": true,
    "no-duplicate-switch-case": true,
    "no-floating-promises": true,
    "no-for-in-array": true,
    "no-inferred-empty-object-type": true,
    "no-mergeable-namespace": true,
    "no-redundant-jsdoc": true,
    "no-this-assignment": true,
    "no-unbound-method": {
        options: ["ignore-static"]
    },
    "no-unnecessary-class": {
        options: ["allow-constructor-only"]
    },
    "no-unnecessary-type-assertion": true,
    "no-var-keyword": true,
    "no-void-expression": {
        options: ["ignore-arrow-function-shorthand"]
    },
    "prefer-object-spread": true,
    "space-within-parens": {
        options: [0]
    },
    "typedef": {
        options: [
            "call-signature"
        ]
    }
};

export = {
    extends: ["tslint:recommended", "tslint-eslint-rules"],
    jsRules,
    rules
};
