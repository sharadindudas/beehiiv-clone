import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEGMENT_MAIN_OPERATORS } from "@/data/segments-data";
import type { ICommonSegmentConditionProps } from "@/types/segments";

export default function ConditionOperatorSection({ form }: { form: ICommonSegmentConditionProps["form"] }) {
    return (
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
    );
}
