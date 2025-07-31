import * as v from "valibot";

export const SegmentFilterSchema = v.object({
    date_type: v.optional(v.string()),
    value: v.pipe(v.string(), v.nonEmpty("Value is required"), v.minLength(1, "Value cannot be empty")),
    operator: v.pipe(v.string(), v.nonEmpty("Operator is required"), v.minLength(1, "Operator cannot be empty")),
    resource_id: v.optional(v.string()),
    relative: v.optional(v.string()),
    relative_amount: v.optional(v.string())
});
export type SegmentFilterSchema = v.InferInput<typeof SegmentFilterSchema>;

// Individual condition schema
export const SegmentConditionSchema = v.object({
    id: v.pipe(v.string(), v.nonEmpty("ID is required")),
    name: v.pipe(v.string(), v.nonEmpty("Name is required"), v.minLength(1, "Name cannot be empty")),
    category: v.pipe(v.string(), v.nonEmpty("Category is required")),
    data: v.object({
        name: v.string(),
        type: v.string(),
        filters: SegmentFilterSchema
    })
});
export type SegmentConditionSchema = v.InferInput<typeof SegmentConditionSchema>;

// Segment conditions schema
export const SegmentConditionsSchema = v.object({
    conditions: v.object({
        conditions: v.pipe(
            v.array(SegmentConditionSchema),
            v.minLength(1, "At least one condition is required"),
            v.maxLength(50, "Maximum 50 conditions allowed")
        ),
        logical_operator: v.pipe(
            v.string(),
            v.nonEmpty("Logical operator is required"),
            v.picklist(["and", "or", "none"], "Invalid logical operator")
        )
    })
});
export type SegmentConditionsSchema = v.InferInput<typeof SegmentConditionsSchema>;
