export = {
    extends: ["tslint:recommended", "tslint-eslint-rules"],
    jsRules: {
        "comment-format": {
            options: "check-space"
        },
        "encoding": true,
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
        "prefer-function-over-method": true,
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
    },
    rules: {
        "arrow-parens": false,
        "await-promise": true,
        "comment-format": {
            options: "check-space"
        },
        "encoding": true,
        "indent": false,
        "interface-name": false,
        "interface-over-type-literal": false,
        "max-classes-per-file": false,
        "no-bitwise": false,
        "no-boolean-literal-compare": true,
        "no-consecutive-blank-lines": {
            options: [2]
        },
        "no-console": false,
        "no-duplicate-imports": true,
        "no-duplicate-switch-case": true,
        "no-duplicate-variable": true,
        "no-empty": false,
        "no-empty-character-class": true,
        "no-floating-promises": true,
        "no-for-in-array": true,
        "no-implicit-dependencies": true,
        "no-inferred-empty-object-type": true,
        "no-invalid-regexp": true,
        "no-irregular-whitespace": true,
        "no-mergeable-namespace": true,
        "no-multi-spaces": true,
        "no-redundant-jsdoc": true,
        "no-shadowed-variable": false,
        "no-switch-case-fall-through": true,
        "no-this-assignment": true,
        "no-unbound-method": true,
        "no-unexpected-multiline": true,
        "no-unnecessary-callback-wrapper": true,
        "no-unnecessary-class": {
            options: ["allow-constructor-only"]
        },
        "no-unnecessary-type-assertion": true,
        "no-unsafe-finally": true,
        "no-unused-variable": true,
        "no-var-keyword": true,
        "no-void-expression": {
            options: ["ignore-arrow-function-shorthand"]
        },
        "object-literal-key-quotes": {
            options: ["consistent-as-needed"]
        },
        "prefer-function-over-method": true,
        "prefer-object-spread": true,
        "prefer-while": true,
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
        "typedef": {
            options: [
                "call-signature",
                "parameter"
            ]
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
    }
};
