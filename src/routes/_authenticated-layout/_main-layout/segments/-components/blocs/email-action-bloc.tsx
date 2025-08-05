import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ALL_POSTS } from "@/data/posts-data";
import {
    SEGMENT_EMAIL_ACTION_OPERATORS_DROPDOWN,
    SEGMENT_EMAIL_ACTION_VALUE_DROPDOWN
} from "@/data/segments-data";
import type { ISelectItem } from "@/types/common";
import type { ICommonSegmentConditionProps } from "@/types/segments";
import { ArrowRight, Trash2 } from "lucide-react";

export default function EmailActionBloc({ index, condition, form }: ICommonSegmentConditionProps) {
    const automationEmails: ISelectItem[] | [] = [];
    const emailSegments: ISelectItem[] | [] = [];
    const posts = ALL_POSTS;

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
                        let operatorList = SEGMENT_EMAIL_ACTION_OPERATORS_DROPDOWN.common;
                        if (["all", "automation_email", "email_to_segment", "post", "welcome_email", "opt_in_email"].includes(condition.id)) {
                            operatorList = SEGMENT_EMAIL_ACTION_OPERATORS_DROPDOWN.common;
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
                            case "all":
                            case "welcome_email":
                            case "opt_in_email":
                                return (
                                    <Select
                                        value={condition.data.filters.value ?? ""}
                                        onValueChange={(value) => subField.handleChange(value)}>
                                        <SelectTrigger className="flex-1 bg-white">
                                            <SelectValue placeholder="Select an action" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {SEGMENT_EMAIL_ACTION_VALUE_DROPDOWN.map((item) => (
                                                <SelectItem
                                                    key={item.id}
                                                    value={item.id}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                );
                            case "automation_email":
                                return (
                                    <>
                                        <Select
                                            value={condition.data.filters.resource_id ?? ""}
                                            onValueChange={(value) => {
                                                form.setFieldValue(`conditions.conditions[${index}].data.filters.resource_id`, value);
                                            }}>
                                            <SelectTrigger className="flex-1 bg-white">
                                                <SelectValue placeholder={`Select ${condition.name}`} />
                                            </SelectTrigger>
                                            <SelectContent className="text-sm">
                                                {automationEmails.length === 0 ? (
                                                    <div className="p-3">No Automation Emails</div>
                                                ) : (
                                                    automationEmails.map((item) => (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={item.id}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))
                                                )}
                                            </SelectContent>
                                        </Select>

                                        <Select
                                            value={condition.data.filters.value ?? ""}
                                            onValueChange={(value) => subField.handleChange(value)}>
                                            <SelectTrigger className="flex-1 bg-white">
                                                <SelectValue placeholder="Select an action" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {SEGMENT_EMAIL_ACTION_VALUE_DROPDOWN.map((item) => (
                                                    <SelectItem
                                                        key={item.id}
                                                        value={item.id}>
                                                        {item.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </>
                                );
                            case "email_to_segment":
                                return (
                                    <>
                                        <Select
                                            value={condition.data.filters.resource_id ?? ""}
                                            onValueChange={(value) => {
                                                form.setFieldValue(`conditions.conditions[${index}].data.filters.resource_id`, value);
                                            }}>
                                            <SelectTrigger className="flex-1 bg-white">
                                                <SelectValue placeholder={`Select ${condition.name}`} />
                                            </SelectTrigger>
                                            <SelectContent className="text-sm">
                                                {emailSegments.length === 0 ? (
                                                    <div className="p-3">No Email Segments</div>
                                                ) : (
                                                    emailSegments.map((item) => (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={item.id}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))
                                                )}
                                            </SelectContent>
                                        </Select>

                                        <Select
                                            value={condition.data.filters.value ?? ""}
                                            onValueChange={(value) => subField.handleChange(value)}>
                                            <SelectTrigger className="flex-1 bg-white">
                                                <SelectValue placeholder="Select an action" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {SEGMENT_EMAIL_ACTION_VALUE_DROPDOWN.map((item) => (
                                                    <SelectItem
                                                        key={item.id}
                                                        value={item.id}>
                                                        {item.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </>
                                );
                            case "post":
                                return (
                                    <>
                                        <Select
                                            value={condition.data.filters.resource_id ?? ""}
                                            onValueChange={(value) => {
                                                form.setFieldValue(`conditions.conditions[${index}].data.filters.resource_id`, value);
                                            }}>
                                            <SelectTrigger className="flex-1 bg-white">
                                                <SelectValue placeholder={`Select ${condition.name}`} />
                                            </SelectTrigger>
                                            <SelectContent className="text-sm">
                                                {posts.length === 0 ? (
                                                    <div className="p-3">No Posts</div>
                                                ) : (
                                                    posts.map((item) => (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={item.id}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))
                                                )}
                                            </SelectContent>
                                        </Select>

                                        <Select
                                            value={condition.data.filters.value ?? ""}
                                            onValueChange={(value) => subField.handleChange(value)}>
                                            <SelectTrigger className="flex-1 bg-white">
                                                <SelectValue placeholder="Select an action" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {SEGMENT_EMAIL_ACTION_VALUE_DROPDOWN.map((item) => (
                                                    <SelectItem
                                                        key={item.id}
                                                        value={item.id}>
                                                        {item.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </>
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
