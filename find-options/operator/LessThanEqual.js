"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FindOperator_1 = require("../FindOperator");
/**
 * Find Options Operator.
 * Example: { someField: LessThanEqual(10) }
 */
function LessThanEqual(value) {
    return new FindOperator_1.FindOperator("lessThanEqual", value);
}
exports.LessThanEqual = LessThanEqual;

//# sourceMappingURL=LessThanEqual.js.map
