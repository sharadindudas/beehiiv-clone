import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { SEGMENT_CONDITIONS_CATEGORIES } from "@/data/segments-data";
import type { ICommonSegmentConditionProps } from "@/types/segments";
import { Plus } from "lucide-react";
import { Fragment } from "react";
import ConditionRenderer from "../condition-renderer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEGMENT_MAIN_OPERATORS } from "@/data/segments-data";

export default function GroupBloc({ form, index }: { form: ICommonSegmentConditionProps["form"]; index: number }) {
    return (
        <div className="mx-10 space-y-5">
            <form.Field name={`conditions.conditions[${index}].data.logical_operator`}>
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
            <form.Field
                name={`conditions.conditions[${index}].data.conditions`}
                mode="array">
                {(field) => (
                    <>
                        {field.state.value?.length === 0 ? (
                            <div className="bg-gray-100 min-h-36 rounded-lg p-4 flex items-center justify-center font-semibold">
                                No Conditions Found
                            </div>
                        ) : (
                            field.state.value?.map((condition) => (
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
                        <div className="flex items-center justify-between gap-4 mt-5">
                            <div className="flex items-center gap-4">
                                {/* Inner Condition Button */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="flex items-center gap-2">
                                            <Plus size={20} />
                                            Inner Condition
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

                                {/* Delete Group Button */}
                                <Button
                                    onClick={() => {
                                        field.removeValue(index);
                                    }}>
                                    Delete Group
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </form.Field>
        </div>
    );
}
