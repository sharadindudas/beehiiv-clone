import CustomDateTimePicker from "@/components/common/custom-date-time-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    SEGMENT_ATTRIBUTES_NAMES_DROPDOWN,
    SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN,
    SEGMENT_ATTRIBUTES_VALUE_DROPDOWN,
    SEGMENT_ATTRIBUTE_DATE_TYPE_DROPDOWN
} from "@/data/segments-data";
import type { SegmentConditionSchema } from "@/schemas/segments";
import type { ICommonSegmentConditionProps } from "@/types/segments";
import { getRelativeUnixDuration } from "@/utils/common";
import { ArrowRight, Trash2 } from "lucide-react";

export default function AttributeBloc({ index, condition, form, field }: ICommonSegmentConditionProps) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm mb-2">
                    {condition.category}
                    <ArrowRight size={16} />
                    {condition.type}
                </div>
                <Button
                    onClick={() => form.removeFieldValue("conditions.conditions", index)}
                    variant={"ghost"}
                    size={"icon"}>
                    <Trash2 />
                </Button>
            </div>
            <div className="flex flex-wrap items-end justify-center gap-5">
                {/* Condition Name */}
                <form.Field name={`conditions.conditions[${index}].id`}>
                    {(subField) => (
                        <Select
                            value={subField.state.value}
                            onValueChange={(value) => {
                                const selectedName = Object.values(SEGMENT_ATTRIBUTES_NAMES_DROPDOWN)
                                    .flat()
                                    .find((item) => item.id === value);
                                form.setFieldValue(`conditions.conditions[${index}].id`, selectedName?.id ?? "");
                                form.setFieldValue(`conditions.conditions[${index}].name`, selectedName?.name ?? "");
                                form.setFieldValue(
                                    `conditions.conditions[${index}].filters`,
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
                <form.Field name={`conditions.conditions[${index}].filters.operator`}>
                    {(subField) => {
                        let operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.common;
                        if (
                            [
                                "email",
                                "status",
                                "tier",
                                "tier_interval",
                                "free_trial",
                                "custom_field",
                                "latest_location/city",
                                "latest_location/state",
                                "latest_location/country",
                                "channel",
                                "source",
                                "medium",
                                "campaign",
                                "referring_url"
                            ].includes(condition.id)
                        ) {
                            operatorList = SEGMENT_ATTRIBUTES_OPERATORS_DROPDOWN.common;
                        } else if (["signup_date", "unsub_date"].includes(condition.id)) {
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
                <form.Field name={`conditions.conditions[${index}].filters.value`}>
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
                                        value={condition.filters.value ?? ""}
                                        onChange={(e) => subField.handleChange(e.target.value)}
                                        className="bg-white flex-1 text-sm"
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
                                        value={condition.filters.value ?? ""}
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
                                                    const defaultFilter = Object.values(SEGMENT_ATTRIBUTES_NAMES_DROPDOWN)
                                                        .flat()
                                                        .find((item) => item.id === condition.id)?.filters;
                                                    updatedConditions[index] = {
                                                        ...condition,
                                                        filters: {
                                                            ...defaultFilter,
                                                            date_type: "specific"
                                                        } as SegmentConditionSchema["filters"]
                                                    };
                                                } else if (value === "relative") {
                                                    updatedConditions[index] = {
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
                                                    updatedConditions[index] = {
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
                                                date={condition.filters.value ?? ""}
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
                                                        const secondsDuration = getRelativeUnixDuration(e.target.value);
                                                        form.setFieldValue(`conditions.conditions[${index}].filters.relative_amount`, e.target.value);
                                                        form.setFieldValue(
                                                            `conditions.conditions[${index}].filters.value`,
                                                            secondsDuration.toString()
                                                        );
                                                    }}
                                                    className="w-24 bg-white text-sm"
                                                />

                                                <span className="text-sm">days</span>
                                                <Select
                                                    value={condition.filters.relative ?? "ago"}
                                                    onValueChange={(value) => {
                                                        const amount = condition.filters.relative_amount ?? "1";
                                                        const secondsDuration = getRelativeUnixDuration(amount);
                                                        form.setFieldValue(`conditions.conditions[${index}].filters.relative`, value);
                                                        form.setFieldValue(
                                                            `conditions.conditions[${index}].filters.value`,
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
                                                form.setFieldValue(`conditions.conditions[${index}].filters.resource_id`, value);
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
                                            value={condition.filters.value ?? ""}
                                            onChange={(e) => subField.handleChange(e.target.value)}
                                            className="bg-white flex-1 text-sm"
                                        />
                                    </>
                                );
                            case "subscriber_tag":
                                return (
                                    <Select
                                        value={condition.filters.value ?? ""}
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
                                        type="text"
                                        placeholder={`Set ${condition.name}`}
                                        value={condition.filters.value ?? ""}
                                        onChange={(e) => subField.handleChange(e.target.value)}
                                        className="bg-white flex-1 text-sm"
                                    />
                                );
                            case "external_embed":
                                return (
                                    <Select
                                        value={condition.filters.value ?? ""}
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
                                        id={condition.type.toLowerCase()}
                                        name={condition.type.toLowerCase()}
                                        type="text"
                                        placeholder="Set a value"
                                        value={condition.filters.value ?? ""}
                                        onChange={(e) => subField.handleChange(e.target.value)}
                                        className="bg-white flex-1 text-sm"
                                    />
                                );
                        }
                    }}
                </form.Field>
            </div>
        </div>
    );
}
