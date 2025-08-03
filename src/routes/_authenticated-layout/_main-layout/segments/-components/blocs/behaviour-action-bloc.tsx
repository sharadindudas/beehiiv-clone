import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    SEGMENT_BEHAVIOUR_ACTION_OPERATORS_DROPDOWN,
    SEGMENT_BEHAVIOUR_ACTION_RESOURCE_ID_DROPDOWN,
    SEGMENT_BEHAVIOUR_ACTION_VALUE_DROPDOWN
} from "@/data/segments-data";
import type { ISelectItem } from "@/types/common";
import type { ICommonSegmentConditionProps } from "@/types/segments";
import { ArrowRight, Trash2 } from "lucide-react";

export default function BehaviourActionBloc({ index, condition, form }: ICommonSegmentConditionProps) {
    const polls: ISelectItem[] | [] = SEGMENT_BEHAVIOUR_ACTION_VALUE_DROPDOWN.polls;
    const pollChoices: ISelectItem[] | [] = SEGMENT_BEHAVIOUR_ACTION_RESOURCE_ID_DROPDOWN.pollchoices;
    const surveys: ISelectItem[] | [] = SEGMENT_BEHAVIOUR_ACTION_VALUE_DROPDOWN.surveys;

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
                {/* Condition Operator */}
                <form.Field name={`conditions.conditions[${index}].data.filters.operator`}>
                    {(subField) => {
                        let operatorList = SEGMENT_BEHAVIOUR_ACTION_OPERATORS_DROPDOWN.common;
                        if (["poll_response", "survey_response"].includes(condition.id)) {
                            operatorList = SEGMENT_BEHAVIOUR_ACTION_OPERATORS_DROPDOWN.common;
                        } else if (condition.id === "referral_count") {
                            operatorList = SEGMENT_BEHAVIOUR_ACTION_OPERATORS_DROPDOWN.referral;
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
                            case "referral_count":
                                return (
                                    <Input
                                        id={condition.id}
                                        name={condition.id}
                                        type="number"
                                        placeholder={`Set ${condition.name}`}
                                        value={condition.data.filters.value ?? ""}
                                        onChange={(e) => subField.handleChange(e.target.value)}
                                        className="bg-white flex-1"
                                    />
                                );
                            case "poll_response":
                                return (
                                    <>
                                        <Select
                                            value={condition.data.filters.resource_id ?? ""}
                                            onValueChange={(value) => {
                                                if (value === "any") {
                                                    form.setFieldValue(`conditions.conditions[${index}].data.filters.value`, "");
                                                }
                                                form.setFieldValue(`conditions.conditions[${index}].data.filters.resource_id`, value);
                                            }}>
                                            <SelectTrigger className="flex-1 bg-white">
                                                <SelectValue placeholder={`Select Polls`} />
                                            </SelectTrigger>
                                            <SelectContent className="text-sm">
                                                {polls.length === 0 ? (
                                                    <div className="p-3">No Polls</div>
                                                ) : (
                                                    polls.map((item) => (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={item.id}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))
                                                )}
                                            </SelectContent>
                                        </Select>

                                        {condition.data.filters.resource_id !== "any" && (
                                            <Select
                                                value={condition.data.filters.value ?? ""}
                                                onValueChange={(value) => subField.handleChange(value)}>
                                                <SelectTrigger className="flex-1 bg-white">
                                                    <SelectValue placeholder="Select Poll Responses" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {pollChoices.length === 0 ? (
                                                        <div className="p-3">No Poll Responses</div>
                                                    ) : (
                                                        pollChoices.map((item) => (
                                                            <SelectItem
                                                                key={item.id}
                                                                value={item.id}>
                                                                {item.name}
                                                            </SelectItem>
                                                        ))
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    </>
                                );
                            case "survey_response":
                                return (
                                    <Select
                                        value={condition.data.filters.value ?? ""}
                                        onValueChange={(value) => subField.handleChange(value)}>
                                        <SelectTrigger className="flex-1 bg-white">
                                            <SelectValue placeholder="Select an action" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {surveys.length === 0 ? (
                                                <div className="p-3">No Polls</div>
                                            ) : (
                                                surveys.map((item) => (
                                                    <SelectItem
                                                        key={item.id}
                                                        value={item.id}>
                                                        {item.name}
                                                    </SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                );
                            default:
                                return (
                                    <Input
                                        id={condition.data.name}
                                        name={condition.data.name}
                                        type="text"
                                        className="bg-white flex-1"
                                        placeholder="Set a value"
                                        value={condition.data.filters.value ?? ""}
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
