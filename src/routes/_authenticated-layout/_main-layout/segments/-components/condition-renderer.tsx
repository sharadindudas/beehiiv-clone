import type { ICommonSegmentConditionProps } from "@/types/segments";
import AttributeBloc from "./blocs/attribute-bloc";
import MeasureBloc from "./blocs/measure-bloc";
import EmailActionBloc from "./blocs/email-action-bloc";

export default function ConditionRenderer({ index, condition, form, field }: ICommonSegmentConditionProps) {
    switch (condition.data.type) {
        case "attribute":
            return (
                <AttributeBloc
                    index={index}
                    condition={condition}
                    form={form}
                    field={field}
                />
            );
        case "measure":
            return (
                <MeasureBloc
                    index={index}
                    condition={condition}
                    form={form}
                    field={field}
                />
            );
        case "email_action":
            return (
                <EmailActionBloc
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
