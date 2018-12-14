"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FindOperator_1 = require("../FindOperator");
/**
 * Find Options Operator.
 * Example: { someField: MoreThan(10) }
 */
function MoreThanEqual(value) {
    return new FindOperator_1.FindOperator("moreThanEqual", value);
}
exports.MoreThanEqual = MoreThanEqual;

//# sourceMappingURL=MoreThanEqual.js.map
