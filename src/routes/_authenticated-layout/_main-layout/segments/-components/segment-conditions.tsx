import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { SEGMENT_CONDITIONS_CATEGORIES, SEGMENT_MAIN_OPERATORS } from "@/data/segments-data";
import { SegmentConditionsSchema } from "@/schemas/segments";
import { useForm, useStore } from "@tanstack/react-form";
import { Plus } from "lucide-react";
import { Fragment } from "react";
import ConditionOperatorSection from "./condition-operator";
import ConditionRenderer from "./condition-renderer";

const SegmentConditionsSection = () => {
    const form = useForm({
        defaultValues: {
            conditions: {
                conditions: [],
                logical_operator: "and"
            }
        } as SegmentConditionsSchema,
        validators: {
            onChange: SegmentConditionsSchema
        },
        onSubmit: ({ value }) => {
            console.log("Form submitted", value);
        }
    });

    const formValues = useStore(form.store, (state) => state.values).conditions;
    console.log(formValues);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            className="my-5 space-y-5">
            {/* Condition Operator */}
            <ConditionOperatorSection form={form} />

            {/* Conditions Rendering Zone */}
            <form.Field
                name="conditions.conditions"
                mode="array">
                {(field) => {
                    return (
                        <>
                            {field.state.value.length === 0 ? (
                                <div className="bg-gray-100 min-h-36 rounded-lg p-4 flex items-center justify-center font-semibold">
                                    No Conditions Found
                                </div>
                            ) : (
                                field.state.value.map((condition, index) => (
                                    <ConditionRenderer
                                        key={condition.sortId}
                                        condition={condition}
                                        index={index}
                                        form={form}
                                        field={field}
                                    />
                                ))
                            )}

                            {/* Condition Buttons */}
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    {/* Simple Condition Button */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className="flex items-center gap-2">
                                                <Plus size={20} />
                                                Condition
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="start"
                                            className="w-48 h-48">
                                            {Object.entries(SEGMENT_CONDITIONS_CATEGORIES).map(([category, conditions], index, array) => (
                                                <Fragment key={category}>
                                                    <DropdownMenuLabel className="text-xs pl-1 text-gray-500">{category}</DropdownMenuLabel>
                                                    {conditions.map((condition) => (
                                                        <DropdownMenuItem
                                                            key={condition.id}
                                                            onClick={() => {
                                                                field.pushValue({
                                                                    id: condition.id,
                                                                    name: condition.name,
                                                                    category: category,
                                                                    sortId: crypto.randomUUID(),
                                                                    data: condition.data
                                                                });
                                                            }}>
                                                            {condition.name}
                                                        </DropdownMenuItem>
                                                    ))}
                                                    {index < array.length - 1 && <DropdownMenuSeparator />}
                                                </Fragment>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    {/* Nested Condition Button */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className="flex items-center gap-2">
                                                <Plus size={20} />
                                                Condition Group
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-48">
                                            {SEGMENT_MAIN_OPERATORS.map((operator) => (
                                                <DropdownMenuItem
                                                    key={operator.id}
                                                    onClick={() => {
                                                        field.pushValue({
                                                            id: "group",
                                                            name: "Group",
                                                            category: "group",
                                                            sortId: crypto.randomUUID(),
                                                            data: {
                                                                name: "Group",
                                                                type: "group",
                                                                logical_operator: operator.id,
                                                                conditions: []
                                                            }
                                                        });
                                                    }}>
                                                    {operator.name}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                <form.Subscribe
                                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                                    children={([canSubmit, isSubmitting]) => (
                                        <Button
                                            type="submit"
                                            disabled={!canSubmit}>
                                            {isSubmitting ? "..." : "Save Segment"}
                                        </Button>
                                    )}
                                />
                            </div>
                        </>
                    );
                }}
            </form.Field>
        </form>
    );
};

export default SegmentConditionsSection;
