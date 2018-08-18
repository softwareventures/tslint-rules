export = {
    "extends": ["tslint:recommended"],
    "rules": {
        "arrow-parens": false,
        "await-promise": true,
        "comment-format": {
            "options": "check-space"
        },
        "encoding": true,
        "indent": {
            "options": ["spaces", 4]
        },
        "interface-name": false,
        "interface-over-type-literal": false,
        "max-classes-per-file": false,
        "no-bitwise": false,
        "no-boolean-literal-compare": true,
        "no-consecutive-blank-lines": {
            "options": [2]
        },
        "no-duplicate-imports": true,
        "no-duplicate-switch-case": true,
        "no-duplicate-variable": true,
        "no-empty": false,
        "no-floating-promises": true,
        "no-for-in-array": true,
        "no-implicit-dependencies": true,
        "no-inferred-empty-object-type": true,
        "no-irregular-whitespace": true,
        "no-mergeable-namespace": true,
        "no-redundant-jsdoc": true,
        "no-shadowed-variable": false,
        "no-switch-case-fall-through": true,
        "no-this-assignment": true,
        "no-unbound-method": true,
        "no-unnecessary-callback-wrapper": true,
        "no-unnecessary-class": {
            "options": ["allow-constructor-only"]
        },
        "no-unnecessary-type-assertion": true,
        "no-unsafe-finally": true,
        "no-unused-variable": true,
        "no-var-keyword": true,
        "no-void-expression": {
            "options": ["ignore-arrow-function-shorthand"]
        },
        "object-literal-key-quotes": {
            "options": ["consistent-as-needed"]
        },
        "prefer-function-over-method": true,
        "prefer-object-spread": true,
        "prefer-while": true,
        "space-within-parens": {
            "options": [0]
        },
        "trailing-comma": {
            "options": {
                "multiline": "ignore",
                "singleline": "never",
                "esSpecCompliant": true
            }
        },
        "typedef": {
            "options": [
                "call-signature",
                "parameter"
            ]
        },
        "variable-name": {
            "options": ["check-format"]
        },
        "whitespace": {
            "options": [
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
    "jsRules": {
        "comment-format": {
            "options": "check-space"
        },
        "encoding": true,
        "indent": {
            "options": ["spaces", 4]
        },
        "no-bitwise": false,
        "no-consecutive-blank-lines": {
            "options": [2]
        },
        "no-duplicate-switch-case": true,
        "no-duplicate-variable": true,
        "no-empty": false,
        "no-implicit-dependencies": true,
        "no-irregular-whitespace": true,
        "no-shadowed-variable": false,
        "no-switch-case-fall-through": true,
        "no-unsafe-finally": true,
        "no-unnecessary-callback-wrapper": true,
        "no-unused-variable": true,
        "object-literal-key-quotes": {
            "options": ["consistent-as-needed"]
        },
        "prefer-function-over-method": true,
        "prefer-while": true,
        "trailing-comma": {
            "options": {
                "multiline": "ignore",
                "singleline": "never",
                "esSpecCompliant": true
            }
        },
        "variable-name": {
            "options": ["check-format"]
        },
        "whitespace": {
            "options": [
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
}