export enum COMMON_CONDITION_OPERATORS_KEY {
    equal = "equal",
    not_equal = "not_equal",
    contain = "contain",
    not_contain = "not_contain",
    start_with = "start_with",
    end_with = "end_with",
    exists = "exists",
    does_not_exist = "does_not_exist",
    greater_than = "greater_than",
    greater_than_equal_to = "greater_than_equal_to",
    less_than = "less_than",
    less_than_equal_to = "less_than_equal_to",
    not_start_with = "not_start_with",
    not_end_with = "not_end_with"
}

export const COMMON_CONDITION_OPERATORS: Record<COMMON_CONDITION_OPERATORS_KEY, string> = {
    [COMMON_CONDITION_OPERATORS_KEY.equal]: "is",
    [COMMON_CONDITION_OPERATORS_KEY.not_equal]: "is not",
    [COMMON_CONDITION_OPERATORS_KEY.contain]: "contains",
    [COMMON_CONDITION_OPERATORS_KEY.not_contain]: "does not contain",
    [COMMON_CONDITION_OPERATORS_KEY.start_with]: "begins with",
    [COMMON_CONDITION_OPERATORS_KEY.end_with]: "ends with",
    [COMMON_CONDITION_OPERATORS_KEY.exists]: "exists",
    [COMMON_CONDITION_OPERATORS_KEY.does_not_exist]: "does not exist",
    [COMMON_CONDITION_OPERATORS_KEY.greater_than]: "is after",
    [COMMON_CONDITION_OPERATORS_KEY.greater_than_equal_to]: "is on or after",
    [COMMON_CONDITION_OPERATORS_KEY.less_than]: "is before",
    [COMMON_CONDITION_OPERATORS_KEY.less_than_equal_to]: "is on or before",
    [COMMON_CONDITION_OPERATORS_KEY.not_start_with]: "did not begin with",
    [COMMON_CONDITION_OPERATORS_KEY.not_end_with]: "did not end with"
};

export function getOperatorOptions(
    allowedOperators?: COMMON_CONDITION_OPERATORS_KEY[],
    overrides?: Partial<Record<COMMON_CONDITION_OPERATORS_KEY, string>>
): { id: COMMON_CONDITION_OPERATORS_KEY; name: string }[] {
    const keys = allowedOperators ?? Object.values(COMMON_CONDITION_OPERATORS_KEY);
    return keys.map((op) => ({
        id: op,
        name: overrides?.[op] ?? COMMON_CONDITION_OPERATORS[op]
    }));
}
