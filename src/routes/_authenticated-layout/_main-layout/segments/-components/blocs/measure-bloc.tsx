import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEGMENT_ENGAGEMENT_NAMES_DROPDOWN, SEGMENT_ENGAGEMENT_OPERATORS_DROPDOWN } from "@/data/segments-data";
import type { SegmentFilterSchema } from "@/schemas/segments";
import type { ICommonSegmentConditionProps } from "@/types/segments";
import { ArrowRight, Trash2 } from "lucide-react";

export default function MeasureBloc({ index, condition, form }: ICommonSegmentConditionProps) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm mb-2">
                    {condition.category}
                    <ArrowRight size={16} />
                    {condition.data.name}
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
                            value={subField.state.value?.includes("measure") ? "" : subField.state.value}
                            onValueChange={(value) => {
                                const selectedName = Object.values(SEGMENT_ENGAGEMENT_NAMES_DROPDOWN)
                                    .flat()
                                    .find((item) => item.id === value);
                                form.setFieldValue(`conditions.conditions[${index}].id`, selectedName?.id ?? "");
                                form.setFieldValue(`conditions.conditions[${index}].name`, selectedName?.name ?? "");
                                form.setFieldValue(`conditions.conditions[${index}].data.filters`, selectedName?.data.filters as SegmentFilterSchema);
                            }}>
                            <SelectTrigger className="flex-1 bg-white">
                                <SelectValue placeholder={`Select ${condition.data.name}`} />
                            </SelectTrigger>
                            <SelectContent className="h-48">
                                {Object.entries(SEGMENT_ENGAGEMENT_NAMES_DROPDOWN).map(([heading, allNames]) => (
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
                <form.Field name={`conditions.conditions[${index}].data.filters.operator`}>
                    {(subField) => {
                        let operatorList = SEGMENT_ENGAGEMENT_OPERATORS_DROPDOWN.common;
                        if (
                            [
                                "unique_opens",
                                "open_rate",
                                "unique_clicks",
                                "verified_unique_clicks",
                                "click_through_rate",
                                "verified_click_through_rate",
                                "unique_sends",
                                "deferred",
                                "bounce"
                            ].includes(condition.id)
                        ) {
                            operatorList = SEGMENT_ENGAGEMENT_OPERATORS_DROPDOWN.common;
                        } else if (condition.id === "link_click") {
                            operatorList = SEGMENT_ENGAGEMENT_OPERATORS_DROPDOWN.link;
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
                <form.Field name={`conditions.conditions[${index}].data.filters.value`}>
                    {(subField) => {
                        switch (condition.id) {
                            case "unique_opens":
                            case "unique_clicks":
                            case "verified_unique_clicks":
                            case "unique_sends":
                            case "link_click":
                            case "deferred":
                            case "bounce":
                                return (
                                    <Input
                                        id={condition.id}
                                        name={condition.id}
                                        type="number"
                                        placeholder={`Set ${condition.name}`}
                                        value={condition.data.filters?.value ?? ""}
                                        onChange={(e) => subField.handleChange(e.target.value)}
                                        className="bg-white flex-1"
                                    />
                                );
                            case "open_rate":
                            case "click_through_rate":
                            case "verified_click_through_rate":
                                return (
                                    <Input
                                        id={condition.id}
                                        name={condition.id}
                                        type="number"
                                        min={0}
                                        max={100}
                                        placeholder={`Set ${condition.name}`}
                                        value={condition.data.filters?.value ?? ""}
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            const num = Number(value);
                                            if (value === "") {
                                                subField.handleChange("");
                                                return;
                                            }
                                            if (Number.isNaN(num)) return;
                                            if (num < 0) value = "0";
                                            else if (num > 100) value = "100";
                                            subField.handleChange(value);
                                        }}
                                        className="bg-white flex-1"
                                    />
                                );
                            default:
                                return (
                                    <Input
                                        id={condition.data.name}
                                        name={condition.data.name}
                                        type="text"
                                        className="bg-white flex-1"
                                        placeholder="Set a value"
                                        value={condition.data.filters?.value ?? ""}
                                        onChange={(e) => subField.handleChange(e.target.value)}
                                    />
                                );
                        }
                    }}
                </form.Field>
            </div>
        </div>
    );
}
