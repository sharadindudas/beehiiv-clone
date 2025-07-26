import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    SEGMENT_ATTRIBUTE_DATE_TYPE_DROPDOWN,
    SEGMENT_ATTRIBUTES_NAMES_DROPDOWN,
    SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN,
    SEGMENT_ATTRIBUTES_VALUE_RESOURCE_ID_DROPDOWN,
    SEGMENT_CONDITIONS_CATEGORY_DATA,
    SEGMENT_MAIN_OPERATORS
} from "@/data/segments-data";
import { SegmentConditionsSchema } from "@/schemas/segments";
import { useForm, useStore } from "@tanstack/react-form";
import { ArrowRight, Plus } from "lucide-react";
import React from "react";

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

    const formValues = useStore(form.store, (state) => state.values).conditions.conditions;
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
            <form.Field name="conditions.logical_operator">
                {(field) => (
                    <Select
                        value={field.state.value}
                        onValueChange={(value) => field.handleChange(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select an Operator" />
                        </SelectTrigger>
                        <SelectContent>
                            {SEGMENT_MAIN_OPERATORS.map((operator) => (
                                <SelectItem
                                    key={operator.id}
                                    value={operator.id}>
                                    {operator.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            </form.Field>

            {/* Conditions Rendering Zone */}
            <form.Field
                name="conditions.conditions"
                mode="array">
                {(field) => {
                    return (
                        <>
                            {field.state.value.length === 0 ? (
                                <div className="bg-gray-200 min-h-36 rounded-lg p-4 flex items-center justify-center font-semibold">
                                    No Conditions Found
                                </div>
                            ) : (
                                field.state.value.map((condition, parentIndex) => {
                                    return (
                                        <div
                                            key={`${parentIndex}-${condition.id}`}
                                            className="bg-gray-100 p-4 rounded-lg flex-1">
                                            <div className="flex items-center gap-1 text-sm mb-2">
                                                {condition.category}
                                                <ArrowRight size={16} />
                                                {condition.type}
                                            </div>
                                            <div className="flex items-center gap-5">
                                                {/* Condition Name */}
                                                <form.Field name={`conditions.conditions[${parentIndex}].id`}>
                                                    {(subField) => (
                                                        <Select
                                                            value={subField.state.value}
                                                            onValueChange={(value) => {
                                                                const selectedName = Object.values(SEGMENT_ATTRIBUTES_NAMES_DROPDOWN)
                                                                    .flat()
                                                                    .find((item) => item.id === value);
                                                                form.setFieldValue(
                                                                    `conditions.conditions[${parentIndex}].id`,
                                                                    selectedName?.id ?? ""
                                                                );
                                                                form.setFieldValue(
                                                                    `conditions.conditions[${parentIndex}].name`,
                                                                    selectedName?.name ?? ""
                                                                );
                                                                form.setFieldValue(
                                                                    `conditions.conditions[${parentIndex}].inputType`,
                                                                    selectedName?.inputType ?? ""
                                                                );
                                                                form.setFieldValue(
                                                                    `conditions.conditions[${parentIndex}].filters.operator`,
                                                                    selectedName?.operator ?? ""
                                                                );
                                                                form.setFieldValue(
                                                                    `conditions.conditions[${parentIndex}].filters.date_type`,
                                                                    selectedName?.date_type ?? ""
                                                                );

                                                                // const updatedConditions = currentConditions.map((condition, index) =>
                                                                //     index === parentIndex
                                                                //         ? {
                                                                //               ...condition,
                                                                //               id: value,
                                                                //               name: selectedName?.name ?? "",
                                                                //               inputType: selectedName?.inputType ?? "",
                                                                //               filters: {
                                                                //                   ...condition.filters,
                                                                //                   operator: selectedName?.operator ?? ""
                                                                //               }
                                                                //           }
                                                                //         : condition
                                                                // );
                                                                // field.handleChange(updatedConditions);
                                                            }}>
                                                            <SelectTrigger className="flex-1 bg-white">
                                                                <SelectValue placeholder={`Select ${condition.type}`} />
                                                            </SelectTrigger>
                                                            <SelectContent className="h-48">
                                                                {Object.entries(SEGMENT_ATTRIBUTES_NAMES_DROPDOWN).map(([heading, allNames]) => (
                                                                    <SelectGroup key={heading}>
                                                                        <SelectLabel className="text-xs pl-1">{heading}</SelectLabel>
                                                                        {allNames.map((name) => (
                                                                            <SelectItem
                                                                                key={name.id}
                                                                                value={name.id}>
                                                                                {name.name}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectGroup>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                </form.Field>

                                                {/* Condition Operator */}
                                                <form.Field name={`conditions.conditions[${parentIndex}].filters.operator`}>
                                                    {(subField) => {
                                                        const currentCondition = field.state.value[parentIndex];
                                                        const conditionId = currentCondition?.id;

                                                        let operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.common;
                                                        if (["signup_date", "unsub_date"].includes(conditionId)) {
                                                            operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.date;
                                                        } else if (conditionId === "subscriber_tag") {
                                                            operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.tags;
                                                        } else if (conditionId === "external_embed") {
                                                            operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.embed;
                                                        }

                                                        return (
                                                            <Select
                                                                value={subField.state.value}
                                                                onValueChange={(value) => subField.handleChange(value)}>
                                                                <SelectTrigger className="flex-1 bg-white">
                                                                    <SelectValue placeholder="Select an Operator" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {operatorList.map((operator) => (
                                                                        <SelectItem
                                                                            key={operator.id}
                                                                            value={operator.id}>
                                                                            {operator.name}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        );
                                                    }}
                                                </form.Field>

                                                {/* Condition Value */}
                                                <form.Field name={`conditions.conditions[${parentIndex}].filters.value`}>
                                                    {(subField) => {
                                                        const currentCondition = field.state.value[parentIndex];
                                                        console.log(currentCondition);

                                                        const valuesDropdown = SEGMENT_ATTRIBUTES_VALUE_RESOURCE_ID_DROPDOWN[condition.id];
                                                        switch (condition.id) {
                                                            case "email":
                                                                return (
                                                                    <Input
                                                                        name={condition.id}
                                                                        type={condition.inputType}
                                                                        className="bg-white flex-1"
                                                                        placeholder={`Set ${condition.name}`}
                                                                        value={subField.state.value ?? ""}
                                                                        onChange={(e) => subField.handleChange(e.target.value)}
                                                                    />
                                                                );
                                                            case "status":
                                                            case "tier":
                                                            case "tier_interval":
                                                            case "free_trial":
                                                                return (
                                                                    <Select
                                                                        value={subField.state.value}
                                                                        onValueChange={(value) => subField.handleChange(value)}>
                                                                        <SelectTrigger className="flex-1 bg-white">
                                                                            <SelectValue placeholder={`Select ${condition.name}`} />
                                                                        </SelectTrigger>
                                                                        <SelectContent className="h-48">
                                                                            {valuesDropdown.map((item) => (
                                                                                <SelectItem
                                                                                    key={item.id}
                                                                                    value={item.id}>
                                                                                    {item.name}
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                );
                                                            case "signup_date":
                                                                return (
                                                                    <>
                                                                        <Select
                                                                            value={currentCondition.filters.date_type ?? ""}
                                                                            onValueChange={(value) => {
                                                                                form.setFieldValue(
                                                                                    `conditions.conditions[${parentIndex}].filters.date_type`,
                                                                                    value
                                                                                );
                                                                            }}>
                                                                            <SelectTrigger className="flex-1 bg-white">
                                                                                <SelectValue placeholder={`Select ${condition.name}`} />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                {SEGMENT_ATTRIBUTE_DATE_TYPE_DROPDOWN.map((item) => (
                                                                                    <SelectItem
                                                                                        key={item.id}
                                                                                        value={item.id}>
                                                                                        {item.name}
                                                                                    </SelectItem>
                                                                                ))}
                                                                            </SelectContent>
                                                                        </Select>

                                                                        <Input
                                                                            name={condition.type.toLowerCase()}
                                                                            type={condition.inputType}
                                                                            className="bg-white flex-1"
                                                                            placeholder="Set a value"
                                                                            value={subField.state.value ?? ""}
                                                                            onChange={(e) => subField.handleChange(e.target.value)}
                                                                        />
                                                                    </>
                                                                );
                                                            default:
                                                                return (
                                                                    <Input
                                                                        name={condition.type.toLowerCase()}
                                                                        type={condition.inputType}
                                                                        className="bg-white flex-1"
                                                                        placeholder="Set a value"
                                                                        value={subField.state.value ?? ""}
                                                                        onChange={(e) => subField.handleChange(e.target.value)}
                                                                    />
                                                                );
                                                        }
                                                    }}
                                                </form.Field>
                                            </div>
                                        </div>
                                    );
                                })
                            )}

                            {/* Condition Buttons */}
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
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
                                            {Object.entries(SEGMENT_CONDITIONS_CATEGORY_DATA).map(([category, categoryTypes], index, array) => (
                                                <React.Fragment key={category}>
                                                    <DropdownMenuLabel className="text-xs pl-1 text-gray-500">{category}</DropdownMenuLabel>
                                                    {categoryTypes.map((type) => (
                                                        <DropdownMenuItem
                                                            key={type.id}
                                                            onClick={() => {
                                                                field.pushValue({
                                                                    id: "",
                                                                    name: "",
                                                                    category: category,
                                                                    type: type.name,
                                                                    inputType: "",
                                                                    filters: {
                                                                        operator: "",
                                                                        value: "",
                                                                        resource_id: ""
                                                                    }
                                                                });
                                                            }}>
                                                            {type.name}
                                                        </DropdownMenuItem>
                                                    ))}
                                                    {index < array.length - 1 && <DropdownMenuSeparator />}
                                                </React.Fragment>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className="flex items-center gap-2">
                                                <Plus size={20} />
                                                Condition Group
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-48">
                                            <DropdownMenuItem>All (AND)</DropdownMenuItem>
                                            <DropdownMenuItem>At least one (OR)</DropdownMenuItem>
                                            <DropdownMenuItem>None</DropdownMenuItem>
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
