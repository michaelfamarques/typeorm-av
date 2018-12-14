import { FindOperator } from "../FindOperator";
/**
 * Find Options Operator.
 * Example: { someField: LessThanEqual(10) }
 */
export function LessThanEqual(value) {
    return new FindOperator("lessThanEqual", value);
}

//# sourceMappingURL=LessThanEqual.js.map
