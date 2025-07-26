import * as v from "valibot";

// Individual condition schema
export const SegmentConditionSchema = v.object({
    id: v.pipe(v.string(), v.nonEmpty("ID is required")),
    name: v.pipe(v.string(), v.nonEmpty("Name is required"), v.minLength(1, "Name cannot be empty")),
    type: v.pipe(v.string(), v.nonEmpty("Type is required")),
    category: v.pipe(v.string(), v.nonEmpty("Category is required")),
    filters: v.object({
        date_type: v.optional(v.string()),
        value: v.pipe(v.string(), v.nonEmpty("Value is required"), v.minLength(1, "Value cannot be empty")),
        operator: v.pipe(v.string(), v.nonEmpty("Operator is required"), v.minLength(1, "Operator cannot be empty")),
        resource_id: v.optional(v.string()),
        relative: v.optional(v.string()),
        relative_amount: v.optional(v.string())
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
