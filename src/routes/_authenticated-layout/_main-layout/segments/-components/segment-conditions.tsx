import { SegmentConditionsSchema } from "@/schemas/segments";
import { useForm, useStore } from "@tanstack/react-form";
import ConditionButtonsSection from "./condition-buttons";
import ConditionRenderer from "./condition-renderer";
import ConditionOperatorSection from "./condition-operator";

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

    const formValues = useStore(form.store, (state) => state.values).conditions.conditions;
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
            <ConditionOperatorSection form={form} />

            {/* Conditions Rendering Zone */}
            <form.Field
                name="conditions.conditions"
                mode="array">
                {(field) => (
                    <>
                        {field.state.value.length === 0 ? (
                            <div className="bg-gray-100 min-h-36 rounded-lg p-4 flex items-center justify-center font-semibold">
                                No Conditions Found
                            </div>
                        ) : (
                            field.state.value.map((condition, index) => (
                                <ConditionRenderer
                                    key={`${index}-${condition.id}`}
                                    condition={condition}
                                    index={index}
                                    form={form}
                                    field={field}
                                />
                            ))
                        )}

                        {/* Condition Buttons */}
                        <ConditionButtonsSection
                            field={field}
                            form={form}
                        />
                    </>
                )}
            </form.Field>
        </form>
    );
};

export default SegmentConditionsSection;
