import type { ICommonSegmentConditionProps } from "@/types/segments";
import AttributeBloc from "./blocs/attribute-bloc";
import AutomationActionBloc from "./blocs/automation-action-bloc";
import EmailActionBloc from "./blocs/email-action-bloc";
import MeasureBloc from "./blocs/measure-bloc";
import BehaviourActionBloc from "./blocs/behaviour-action-bloc";

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
        case "automation_action":
            return (
                <AutomationActionBloc
                    index={index}
                    condition={condition}
                    form={form}
                    field={field}
                />
            );
        case "behaviour_action":
            return (
                <BehaviourActionBloc
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
