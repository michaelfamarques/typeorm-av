import { FindOperator } from "../FindOperator";
/**
 * Find Options Operator.
 * Example: { someField: IsNull() }
 */
export function isNotNull() {
    return new FindOperator("isNotNull", undefined, false);
}

//# sourceMappingURL=IsNotNull.js.map
