import { FindOperator } from "../FindOperator";
/**
 * Find Options Operator.
 * Example: { someField: MoreThan(10) }
 */
export declare function MoreThanEqual<T>(value: T | FindOperator<T>): FindOperator<T>;
