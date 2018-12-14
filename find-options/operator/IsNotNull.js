"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FindOperator_1 = require("../FindOperator");
/**
 * Find Options Operator.
 * Example: { someField: IsNull() }
 */
function isNotNull() {
    return new FindOperator_1.FindOperator("isNotNull", undefined, false);
}
exports.isNotNull = isNotNull;

//# sourceMappingURL=IsNotNull.js.map
