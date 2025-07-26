import CustomDateTimePicker from "@/components/common/custom-date-time-picker";
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
    SEGMENT_ATTRIBUTES_VALUE_DROPDOWN,
    SEGMENT_CONDITIONS_CATEGORIES,
    SEGMENT_MAIN_OPERATORS
} from "@/data/segments-data";
import { SegmentConditionSchema, SegmentConditionsSchema } from "@/schemas/segments";
import { getRelativeUnixDuration } from "@/utils/common";
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

    const formErrors = useStore(form.store, (state) => state.errors);
    const formValues = useStore(form.store, (state) => state.values).conditions.conditions[0];
    console.log(formErrors);
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
                        <SelectTrigger className="w-[180px] bg-white">
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
                                <div className="bg-gray-100 min-h-36 rounded-lg p-4 flex items-center justify-center font-semibold">
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
                                            <div className="flex flex-wrap items-end justify-center gap-5">
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
                                                                    `conditions.conditions[${parentIndex}].filters`,
                                                                    selectedName?.filters as SegmentConditionSchema["filters"]
                                                                );
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
                                                        let operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.common;
                                                        if (["signup_date", "unsub_date"].includes(condition.id)) {
                                                            operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.date;
                                                        } else if (condition.id === "subscriber_tag") {
                                                            operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.tags;
                                                        } else if (condition.id === "external_embed") {
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
                                                        const valuesDropdown = SEGMENT_ATTRIBUTES_VALUE_DROPDOWN[condition.id];
                                                        switch (condition.id) {
                                                            case "email":
                                                                return (
                                                                    <Input
                                                                        id={condition.id}
                                                                        name={condition.id}
                                                                        type="email"
                                                                        placeholder={`Set ${condition.name}`}
                                                                        value={subField.state.value ?? ""}
                                                                        onChange={(e) => subField.handleChange(e.target.value)}
                                                                        className="bg-white flex-1"
                                                                    />
                                                                );
                                                            case "status":
                                                            case "tier":
                                                            case "tier_interval":
                                                            case "free_trial":
                                                            case "latest_location/country":
                                                            case "channel":
                                                                return (
                                                                    <Select
                                                                        value={subField.state.value}
                                                                        onValueChange={(value) => subField.handleChange(value)}>
                                                                        <SelectTrigger className="flex-1 bg-white">
                                                                            <SelectValue placeholder={`Select ${condition.name}`} />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
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
                                                            case "unsub_date":
                                                                return (
                                                                    <>
                                                                        <Select
                                                                            value={condition.filters.date_type ?? ""}
                                                                            onValueChange={(value) => {
                                                                                const updatedConditions = [...field.state.value];
                                                                                if (value === "specific") {
                                                                                    const defaultFilter = Object.values(
                                                                                        SEGMENT_ATTRIBUTES_NAMES_DROPDOWN
                                                                                    )
                                                                                        .flat()
                                                                                        .find((item) => item.id === condition.id)?.filters;
                                                                                    updatedConditions[parentIndex] = {
                                                                                        ...condition,
                                                                                        filters: {
                                                                                            ...defaultFilter,
                                                                                            date_type: "specific"
                                                                                        } as SegmentConditionSchema["filters"]
                                                                                    };
                                                                                } else if (value === "relative") {
                                                                                    updatedConditions[parentIndex] = {
                                                                                        ...condition,
                                                                                        filters: {
                                                                                            operator: "greater_than",
                                                                                            date_type: "relative",
                                                                                            relative_amount: "1",
                                                                                            relative: "ago",
                                                                                            value: getRelativeUnixDuration("1").toString()
                                                                                        } as SegmentConditionSchema["filters"]
                                                                                    };
                                                                                } else {
                                                                                    updatedConditions[parentIndex] = {
                                                                                        ...condition,
                                                                                        filters: {
                                                                                            ...condition.filters,
                                                                                            date_type: value,
                                                                                            value: ""
                                                                                        } as SegmentConditionSchema["filters"]
                                                                                    };
                                                                                }
                                                                                field.handleChange(updatedConditions);
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

                                                                        {condition.filters.date_type === "specific" && (
                                                                            <CustomDateTimePicker
                                                                                date={subField.state.value}
                                                                                onDateChange={(timestamp) => {
                                                                                    subField.handleChange(timestamp);
                                                                                }}
                                                                            />
                                                                        )}

                                                                        {condition.filters.date_type === "relative" && (
                                                                            <div className="flex items-center gap-2">
                                                                                <span>of</span>
                                                                                <Input
                                                                                    id={condition.id}
                                                                                    name={condition.id}
                                                                                    type="number"
                                                                                    min={0}
                                                                                    placeholder="Amount"
                                                                                    value={condition.filters.relative_amount ?? "1"}
                                                                                    onChange={(e) => {
                                                                                        const secondsDuration = getRelativeUnixDuration(
                                                                                            e.target.value
                                                                                        );
                                                                                        form.setFieldValue(
                                                                                            `conditions.conditions[${parentIndex}].filters.relative_amount`,
                                                                                            e.target.value
                                                                                        );
                                                                                        form.setFieldValue(
                                                                                            `conditions.conditions[${parentIndex}].filters.value`,
                                                                                            secondsDuration.toString()
                                                                                        );
                                                                                    }}
                                                                                    className="w-24 bg-white"
                                                                                />

                                                                                <span className="text-sm">days</span>

                                                                                <Select
                                                                                    value={condition.filters.relative ?? "ago"}
                                                                                    onValueChange={(value) => {
                                                                                        const amount = condition.filters.relative_amount ?? "1";
                                                                                        const secondsDuration = getRelativeUnixDuration(amount);
                                                                                        form.setFieldValue(
                                                                                            `conditions.conditions[${parentIndex}].filters.relative`,
                                                                                            value
                                                                                        );
                                                                                        form.setFieldValue(
                                                                                            `conditions.conditions[${parentIndex}].filters.value`,
                                                                                            secondsDuration.toString()
                                                                                        );
                                                                                    }}>
                                                                                    <SelectTrigger className="w-28 bg-white">
                                                                                        <SelectValue />
                                                                                    </SelectTrigger>
                                                                                    <SelectContent>
                                                                                        <SelectItem value="ago">ago</SelectItem>
                                                                                        <SelectItem value="from_now">from now</SelectItem>
                                                                                    </SelectContent>
                                                                                </Select>
                                                                            </div>
                                                                        )}
                                                                    </>
                                                                );
                                                            case "custom_field":
                                                                return (
                                                                    <>
                                                                        <Select
                                                                            value={condition.filters.resource_id ?? ""}
                                                                            onValueChange={(value) => {
                                                                                form.setFieldValue(
                                                                                    `conditions.conditions[${parentIndex}].filters.resource_id`,
                                                                                    value
                                                                                );
                                                                            }}>
                                                                            <SelectTrigger className="flex-1 bg-white">
                                                                                <SelectValue placeholder={`Select ${condition.name}`} />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                {valuesDropdown.map((item) => (
                                                                                    <SelectItem
                                                                                        key={item.id}
                                                                                        value={item.id}>
                                                                                        {item.name}
                                                                                    </SelectItem>
                                                                                ))}
                                                                            </SelectContent>
                                                                        </Select>

                                                                        <Input
                                                                            id={condition.id}
                                                                            name={condition.id}
                                                                            type="text"
                                                                            placeholder={`Set ${condition.name}`}
                                                                            value={subField.state.value ?? ""}
                                                                            onChange={(e) => subField.handleChange(e.target.value)}
                                                                            className="bg-white flex-1"
                                                                        />
                                                                    </>
                                                                );
                                                            case "subscriber_tag":
                                                                return (
                                                                    <Select
                                                                        value={subField.state.value ?? ""}
                                                                        onValueChange={(value) => subField.handleChange(value)}>
                                                                        <SelectTrigger className="flex-1 bg-white">
                                                                            <SelectValue placeholder={`Select ${condition.name}`} />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
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
                                                            case "latest_location/city":
                                                            case "latest_location/state":
                                                            case "source":
                                                            case "medium":
                                                            case "compaign":
                                                            case "referring_url":
                                                                return (
                                                                    <Input
                                                                        id={condition.id}
                                                                        name={condition.id}
                                                                        type="email"
                                                                        placeholder={`Set ${condition.name}`}
                                                                        value={subField.state.value ?? ""}
                                                                        onChange={(e) => subField.handleChange(e.target.value)}
                                                                        className="bg-white flex-1"
                                                                    />
                                                                );
                                                            case "external_embed":
                                                                return (
                                                                    <Select
                                                                        value={subField.state.value ?? ""}
                                                                        onValueChange={(value) => subField.handleChange(value)}>
                                                                        <SelectTrigger className="flex-1 bg-white">
                                                                            <SelectValue placeholder={`Select ${condition.name}`} />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
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
                                                            default:
                                                                return (
                                                                    <Input
                                                                        name={condition.type.toLowerCase()}
                                                                        type="text"
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
                                            {Object.entries(SEGMENT_CONDITIONS_CATEGORIES).map(([category, categoryTypes], index, array) => (
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
                                                                    filters: {
                                                                        operator: "equal",
                                                                        value: ""
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
