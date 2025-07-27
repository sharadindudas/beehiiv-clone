import type { ICommonSegmentConditionProps } from "@/types/segments";
import AttributeBloc from "./blocs/attribute-bloc";
import EngagementBloc from "./blocs/measure-bloc";

export default function ConditionRenderer({ index, condition, form, field }: ICommonSegmentConditionProps) {
    switch (condition.type.toLowerCase()) {
        case "attribute":
            return (
                <AttributeBloc
                    index={index}
                    condition={condition}
                    form={form}
                    field={field}
                />
            );
        case "engagement":
            return (
                <EngagementBloc
                    index={index}
                    condition={condition}
                    form={form}
                    field={field}
                />
            );
        default:
            return (
                <AttributeBloc
                    index={index}
                    condition={condition}
                    form={form}
                    field={field}
                />
            );
    }
}
