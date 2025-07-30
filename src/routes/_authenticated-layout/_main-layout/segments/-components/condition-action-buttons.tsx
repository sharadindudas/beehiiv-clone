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

export default function ConditionActionButtonsSection({
    field,
    form
}: {
    field: ICommonSegmentConditionProps["field"];
    form: ICommonSegmentConditionProps["form"];
}) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex items-center gap-2">
                            <Plus size={20} />
                            Condition
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

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex items-center gap-2">
                            <Plus size={20} />
                            Condition Group
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                        <DropdownMenuItem>All (AND)</DropdownMenuItem>
                        <DropdownMenuItem>At least one (OR)</DropdownMenuItem>
                        <DropdownMenuItem>None</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                    <Button
                        type="submit"
                        disabled={!canSubmit}>
                        {isSubmitting ? "..." : "Save Segment"}
                    </Button>
                )}
            />
        </div>
    );
}
