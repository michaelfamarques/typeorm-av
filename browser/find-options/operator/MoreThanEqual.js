import { FindOperator } from "../FindOperator";
/**
 * Find Options Operator.
 * Example: { someField: MoreThan(10) }
 */
export function MoreThanEqual(value) {
    return new FindOperator("moreThanEqual", value);
}

//# sourceMappingURL=MoreThanEqual.js.map
