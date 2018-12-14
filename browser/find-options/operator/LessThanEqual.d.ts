import { FindOperator } from "../FindOperator";
/**
 * Find Options Operator.
 * Example: { someField: LessThanEqual(10) }
 */
export declare function LessThanEqual<T>(value: T | FindOperator<T>): FindOperator<T>;
